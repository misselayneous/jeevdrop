"use client";

import { useState, useEffect } from 'react';
import { Donor, Donation, MilestoneReward } from '@/app/models/donor';

export default function DonorDashboard() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [donor, setDonor] = useState<Donor | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [milestones, setMilestones] = useState<MilestoneReward[]>([]);

  const fetchDonorData = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/donations?email=${encodeURIComponent(email)}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch donor data');
      }
      
      const data = await response.json();
      setDonor(data.donor);
      setDonations(data.donations);
      setMilestones(data.milestones);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setDonor(null);
      setDonations([]);
      setMilestones([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-red-700">Jeev Drop Donor Dashboard</h1>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Find Your Donation History</h2>
        <form onSubmit={fetchDonorData} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            required
          />
          <button 
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'View Your Impact'}
          </button>
        </form>
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </div>
      
      {donor && (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Donation Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Total Pints Donated</p>
                <p className="text-2xl font-bold text-red-700">{donor.totalPints}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Donations Made</p>
                <p className="text-2xl font-bold text-red-700">{donations.length}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Last Donation</p>
                <p className="text-2xl font-bold text-red-700">
                  {donor.lastDonationDate ? new Date(donor.lastDonationDate).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>
          </div>
          
          {milestones.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Rewards</h2>
              <div className="space-y-4">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="bg-green-50 p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">{milestone.rewardDescription}</p>
                      <p className="text-sm text-gray-600">
                        Achieved on {new Date(milestone.dateReached).toLocaleDateString()}
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      milestone.rewardClaimed 
                        ? 'bg-gray-100 text-gray-600' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {milestone.rewardClaimed ? 'Claimed' : 'Available!'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {donations.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Donation History</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pints</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {donations.map((donation) => (
                      <tr key={donation.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(donation.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {donation.pints} {donation.pints === 1 ? 'pint' : 'pints'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {donation.locationId || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {donation.campaignId || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 