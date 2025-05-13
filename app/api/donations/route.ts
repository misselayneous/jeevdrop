import { NextResponse } from 'next/server';
import { Donor, Donation, MilestoneReward, calculateMilestones } from '@/app/models/donor';

// In-memory storage for demonstration - would be a database in production
const donors: Record<string, Donor> = {};
const donations: Donation[] = [];
const milestoneRewards: MilestoneReward[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, zipCode, pints = 1, locationId, campaignId } = body;
    
    // Basic validation
    if (!email || !pints || pints <= 0) {
      return NextResponse.json(
        { error: 'Email and valid pint amount are required' },
        { status: 400 }
      );
    }
    
    // Find or create donor
    let donor = donors[email];
    if (!donor) {
      donor = {
        id: `donor_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        email,
        name: name || '',
        zipCode: zipCode || '',
        totalPints: 0,
        lastDonationDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      donors[email] = donor;
    }
    
    // Update donor stats
    donor.totalPints += pints;
    donor.lastDonationDate = new Date();
    donor.updatedAt = new Date();
    
    // Create donation record
    const donation: Donation = {
      id: `donation_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      donorId: donor.id,
      pints,
      date: new Date(),
      locationId,
      campaignId,
    };
    
    donations.push(donation);
    
    // Check for milestones
    const newMilestones = calculateMilestones(donor);
    
    // Filter out milestones that have already been recorded
    const uniqueNewMilestones = newMilestones.filter(newMilestone => 
      !milestoneRewards.some(existingMilestone => 
        existingMilestone.donorId === newMilestone.donorId && 
        existingMilestone.milestoneType === newMilestone.milestoneType && 
        existingMilestone.milestoneValue === newMilestone.milestoneValue
      )
    );
    
    // Update milestone status if any new ones were reached
    if (uniqueNewMilestones.length > 0) {
      milestoneRewards.push(...uniqueNewMilestones);
    }
    
    // Return success with donor information and milestones
    return NextResponse.json({ 
      success: true,
      donor,
      donation,
      newMilestones: uniqueNewMilestones,
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error processing donation:', error);
    return NextResponse.json(
      { error: 'Failed to process donation' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  
  if (!email) {
    return NextResponse.json(
      { error: 'Email parameter is required' },
      { status: 400 }
    );
  }
  
  const donor = donors[email];
  if (!donor) {
    return NextResponse.json(
      { error: 'Donor not found' },
      { status: 404 }
    );
  }
  
  // Get donor's donations
  const donorDonations = donations.filter(d => d.donorId === donor.id);
  
  // Get donor's milestone rewards
  const donorMilestones = milestoneRewards.filter(m => m.donorId === donor.id);
  
  return NextResponse.json({
    donor,
    donations: donorDonations,
    milestones: donorMilestones
  });
} 