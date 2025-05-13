-- Waitlist entries table
CREATE TABLE waitlist_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  zip TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Donors table
CREATE TABLE donors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  zip_code TEXT NOT NULL,
  total_pints INTEGER NOT NULL DEFAULT 0,
  last_donation_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Donations table
CREATE TABLE donations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  donor_id UUID NOT NULL REFERENCES donors(id),
  pints INTEGER NOT NULL,
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  location_id TEXT,
  campaign_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Milestone rewards table
CREATE TABLE milestone_rewards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  donor_id UUID NOT NULL REFERENCES donors(id),
  milestone_type TEXT NOT NULL,
  milestone_value INTEGER NOT NULL,
  reward_description TEXT NOT NULL,
  reward_claimed BOOLEAN NOT NULL DEFAULT FALSE,
  date_reached TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  date_redeemed TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
); 