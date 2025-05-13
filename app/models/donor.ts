export type Donor = {
  id: string;
  email: string;
  name?: string;
  zipCode: string;
  totalPints: number;
  lastDonationDate?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type Donation = {
  id: string;
  donorId: string;
  pints: number;
  date: Date;
  locationId?: string;
  campaignId?: string;
};

export type MilestoneReward = {
  id: string;
  donorId: string;
  milestoneType: 'pint_count';
  milestoneValue: number;
  rewardDescription: string;
  rewardClaimed: boolean;
  dateReached: Date;
  dateRedeemed?: Date;
};

// Pint donation milestones
export const MILESTONE_THRESHOLDS = {
  PINT_COUNT: [1, 5, 10],
};

// Map rewards to milestone thresholds
export const MILESTONE_REWARDS = {
  1: "Free coffee or photo booth voucher",
  5: "Jeev t-shirt and $500",
  10: "$1000 and exclusive merch"
};

// Helper functions for donor management
export const calculateMilestones = (donor: Donor): MilestoneReward[] => {
  const rewards: MilestoneReward[] = [];
  
  // Check pint count milestones
  for (const threshold of MILESTONE_THRESHOLDS.PINT_COUNT) {
    if (donor.totalPints >= threshold) {
      rewards.push({
        id: `pint-${donor.id}-${threshold}`,
        donorId: donor.id,
        milestoneType: 'pint_count',
        milestoneValue: threshold,
        rewardDescription: `${threshold} ${threshold === 1 ? 'pint' : 'pints'} donated: ${MILESTONE_REWARDS[threshold as keyof typeof MILESTONE_REWARDS]}`,
        rewardClaimed: false,
        dateReached: new Date(),
      });
    }
  }
  
  return rewards;
}; 