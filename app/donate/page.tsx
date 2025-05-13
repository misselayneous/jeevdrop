"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MilestoneReward } from '@/app/models/donor';

type DonationForm = {
  email: string;
  name: string;
  zipCode: string;
  pints: number;
  locationId?: string;
  campaignId?: string;
};

export default function DonatePage() {
  const [success, setSuccess] = useState(false);
  const [newMilestones, setNewMilestones] = useState<MilestoneReward[]>([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DonationForm>({
    defaultValues: {
      pints: 1,
    },
  });

  const onSubmit = async (data: DonationForm) => {
    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process donation');
      }

      const result = await response.json();
      setSuccess(true);
      setNewMilestones(result.newMilestones || []);
      reset();
    } catch (error) {
      console.error('Error submitting donation:', error);
      alert(error instanceof Error ? error.message : 'An error occurred processing your donation');
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6">
      <h1 className="text-3xl font-bold mb-2 text-red-700">Donate Blood with Jeev Drop</h1>
      <p className="text-gray-600 mb-8">
        Your blood donation helps save lives in communities that need it most.
      </p>

      {success ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">Thank You for Your Donation!</h2>
          <p className="text-green-700 mb-4">Your contribution will help save lives.</p>
          
          {newMilestones.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium text-green-800 mb-2">🎉 Congratulations! You've earned:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {newMilestones.map((milestone) => (
                  <li key={milestone.id} className="text-green-700">
                    {milestone.rewardDescription}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <button
            onClick={() => {
              setSuccess(false);
              setNewMilestones([]);
            }}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Record Another Donation
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code *
              </label>
              <input
                type="text"
                id="zipCode"
                {...register('zipCode', {
                  required: 'ZIP Code is required',
                  pattern: {
                    value: /^[0-9]{5}$/,
                    message: 'Please enter a valid 5-digit ZIP code',
                  },
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="10001"
              />
              {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>}
            </div>

            <div>
              <label htmlFor="pints" className="block text-sm font-medium text-gray-700 mb-1">
                Pints Donated *
              </label>
              <input
                type="number"
                id="pints"
                {...register('pints', {
                  required: 'Amount is required',
                  min: {
                    value: 1,
                    message: 'Minimum donation is 1 pint',
                  },
                  max: {
                    value: 2,
                    message: 'Maximum donation is 2 pints per session'
                  },
                  valueAsNumber: true,
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
              {errors.pints && <p className="mt-1 text-sm text-red-600">{errors.pints.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="locationId" className="block text-sm font-medium text-gray-700 mb-1">
                Donation Location
              </label>
              <select
                id="locationId"
                {...register('locationId')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Select location (optional)</option>
                <option value="nyc_manhattan">Manhattan, NYC</option>
                <option value="nyc_brooklyn">Brooklyn, NYC</option>
                <option value="sf_downtown">San Francisco Downtown</option>
                <option value="chicago_loop">Chicago Loop</option>
              </select>
            </div>

            <div>
              <label htmlFor="campaignId" className="block text-sm font-medium text-gray-700 mb-1">
                Campaign
              </label>
              <select
                id="campaignId"
                {...register('campaignId')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Select campaign (optional)</option>
                <option value="spring2025">Spring 2025 Drive</option>
                <option value="emergency">Emergency Response</option>
                <option value="community">Community Outreach</option>
              </select>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 text-white font-medium py-3 px-4 rounded-md hover:bg-red-700 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Record Blood Donation'}
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Your information is collected to track your donation journey and send you updates about Jeev Drop events and milestones.
            We never share your personal information with third parties.
          </p>
        </form>
      )}
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Donation Rewards Program</h2>
        <p className="text-gray-600 mb-4">
          Earn special rewards as you donate blood with Jeev Drop:
        </p>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="bg-red-100 p-1 rounded-full mr-3">
              <span className="text-red-700">☕</span>
            </div>
            <div>
              <p className="font-medium">1 Pint Donated</p>
              <p className="text-sm text-gray-600">Free coffee or photo booth voucher</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-red-100 p-1 rounded-full mr-3">
              <span className="text-red-700">👕</span>
            </div>
            <div>
              <p className="font-medium">5 Pints Donated</p>
              <p className="text-sm text-gray-600">Jeev t-shirt and $500</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-red-100 p-1 rounded-full mr-3">
              <span className="text-red-700">🎁</span>
            </div>
            <div>
              <p className="font-medium">10 Pints Donated</p>
              <p className="text-sm text-gray-600">$1000 and exclusive merchandise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 