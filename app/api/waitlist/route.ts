import { NextResponse } from 'next/server';
import { createAdminClient } from '@/app/lib/supabase';

// This would normally connect to a database
// In production, use Supabase, Prisma, or your preferred database
type WaitlistEntry = {
  email: string;
  zip: string;
  createdAt: Date;
};

// In-memory storage for demonstration - would be a database in production
const waitlistEntries: WaitlistEntry[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, zip } = body;
    
    // Basic validation
    if (!email || !zip) {
      return NextResponse.json(
        { error: 'Email and ZIP code are required' },
        { status: 400 }
      );
    }
    
    // Save to Supabase
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from('waitlist_entries')
      .insert([
        { email, zip }
      ])
      .select();
    
    if (error) {
      console.error('Error saving to waitlist:', error);
      if (error.code === '23505') { // Unique violation
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to add to waitlist' },
        { status: 500 }
      );
    }
    
    console.log('New waitlist entry:', data[0]);
    
    return NextResponse.json({ success: true, data: data[0] }, { status: 201 });
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    return NextResponse.json(
      { error: 'Failed to process waitlist submission' },
      { status: 500 }
    );
  }
} 