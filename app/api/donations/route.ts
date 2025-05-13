import { NextResponse } from 'next/server';
import { createAdminClient } from '@/app/lib/supabase';
import { MILESTONE_THRESHOLDS, MILESTONE_REWARDS } from '@/app/models/donor';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, zipCode, pints, locationId, campaignId } = body;
    
    if (!email || !zipCode || !pints) {
      return NextResponse.json(
        { error: 'Email, ZIP code, and pints are required' },
        { status: 400 }
      );
    }
    
    const supabase = createAdminClient();
    
    // Find or create donor
    let { data: donor, error: donorError } = await supabase
      .from('donors')
      .select('*')
      .eq('email', email)
      .single();
    
    if (donorError && donorError.code !== 'PGRST116') { // PGRST116 is "not found"
      console.error('Error finding donor:', donorError);
      return NextResponse.json(
        { error: 'Error processing donation' },
        { status: 500 }
      );
    }
    
    // If donor doesn't exist, create a new one
    if (!donor) {
      const { data: newDonor, error: createError } = await supabase
        .from('donors')
        .insert([
          { 
            email, 
            name, 
            zip_code: zipCode,
            total_pints: 0
          }
        ])
        .select()
        .single();
      
      if (createError) {
        console.error('Error creating donor:', createError);
        return NextResponse.json(
          { error: 'Failed to create donor record' },
          { status: 500 }
        );
      }
      
      donor = newDonor;
    }
    
    // Update donor's total pints and last donation date
    const newTotalPints = (donor.total_pints || 0) + pints;
    const { error: updateError } = await supabase
      .from('donors')
      .update({ 
        total_pints: newTotalPints,
        last_donation_date: new Date().toISOString(),
        name: name || donor.name // Update name if provided
      })
      .eq('id', donor.id);
    
    if (updateError) {
      console.error('Error updating donor:', updateError);
      return NextResponse.json(
        { error: 'Failed to update donor record' },
        { status: 500 }
      );
    }
    
    // Record the donation
    const { data: donation, error: donationError } = await supabase
      .from('donations')
      .insert([
        {
          donor_id: donor.id,
          pints,
          location_id: locationId,
          campaign_id: campaignId,
          date: new Date().toISOString()
        }
      ])
      .select()
      .single();
    
    if (donationError) {
      console.error('Error recording donation:', donationError);
      return NextResponse.json(
        { error: 'Failed to record donation' },
        { status: 500 }
      );
    }
    
    // Check for new milestones
    const newMilestones = [];
    
    for (const threshold of MILESTONE_THRESHOLDS.PINT_COUNT) {
      // Check if this donation pushed them over a milestone threshold
      if (donor.total_pints < threshold && newTotalPints >= threshold) {
        const rewardDescription = `${threshold} ${threshold === 1 ? 'pint' : 'pints'} donated: ${MILESTONE_REWARDS[threshold as keyof typeof MILESTONE_REWARDS]}`;
        
        const { data: milestone, error: milestoneError } = await supabase
          .from('milestone_rewards')
          .insert([
            {
              donor_id: donor.id,
              milestone_type: 'pint_count',
              milestone_value: threshold,
              reward_description: rewardDescription
            }
          ])
          .select()
          .single();
        
        if (milestoneError) {
          console.error('Error recording milestone:', milestoneError);
        } else {
          newMilestones.push(milestone);
        }
      }
    }
    
    return NextResponse.json({
      success: true,
      donation,
      newMilestones
    });
    
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
  
  const supabase = createAdminClient();
  
  // Get donor information
  const { data: donor, error: donorError } = await supabase
    .from('donors')
    .select('*')
    .eq('email', email)
    .single();
  
  if (donorError) {
    return NextResponse.json(
      { error: 'Donor not found' },
      { status: 404 }
    );
  }
  
  // Get donor's donations
  const { data: donations, error: donationsError } = await supabase
    .from('donations')
    .select('*')
    .eq('donor_id', donor.id)
    .order('date', { ascending: false });
  
  if (donationsError) {
    console.error('Error fetching donations:', donationsError);
    return NextResponse.json(
      { error: 'Failed to fetch donation history' },
      { status: 500 }
    );
  }
  
  // Get donor's milestone rewards
  const { data: milestones, error: milestonesError } = await supabase
    .from('milestone_rewards')
    .select('*')
    .eq('donor_id', donor.id)
    .order('date_reached', { ascending: false });
  
  if (milestonesError) {
    console.error('Error fetching milestones:', milestonesError);
    return NextResponse.json(
      { error: 'Failed to fetch reward milestones' },
      { status: 500 }
    );
  }
  
  return NextResponse.json({
    donor,
    donations,
    milestones
  });
} 