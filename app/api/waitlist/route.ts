import { NextResponse } from 'next/server';

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
    
    // Create waitlist entry
    const entry: WaitlistEntry = {
      email,
      zip,
      createdAt: new Date(),
    };
    
    // Save to in-memory array (would save to database in production)
    waitlistEntries.push(entry);
    
    console.log('New waitlist entry:', entry);
    
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    return NextResponse.json(
      { error: 'Failed to process waitlist submission' },
      { status: 500 }
    );
  }
} 