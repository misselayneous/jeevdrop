"use client";

import React from 'react';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold mb-6 text-red-700">Upcoming Blood Drives</h1>
      <p className="mb-12 text-lg text-gray-600">
        Below are our upcoming blood donation events. Sign up to receive notifications when we add new events in your area.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* First Event Card - Coming Soon */}
        <div className="bg-white shadow-sm border-l-4 border-red-600 p-6 rounded-sm">
          <div className="flex justify-between items-start">
            <div>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-md mb-2">
                Coming Soon
              </span>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Jeev Drop Blood Drive</h2>
              <p className="text-gray-500 mb-3">Location to be announced</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            We're planning our next blood drive. Join our waitlist to be notified when details are confirmed.
          </p>
          <Link 
            href="/waitlist" 
            className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Second Event Card - East Village DJ Set */}
        <div className="bg-white shadow-sm border-l-4 border-red-600 p-6 rounded-sm">
          <div className="flex justify-between items-start">
            <div>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-md mb-2">
                Upcoming
              </span>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">East Village DJ Set</h2>
              <p className="text-gray-500 mb-3">Tompkins Square Park on Avenue A</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium text-gray-900">Summer 2025</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Join us for a weekend blood drive in the East Village. Music, refreshments, and exclusive Jeev merch for all donors.
          </p>
          <Link 
            href="/waitlist" 
            className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition"
          >
            Get Notified
          </Link>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Want to host a blood drive?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          If you're a business, organization, or community leader interested in hosting a Jeev Drop 
          blood drive at your location, we'd love to hear from you.
        </p>
        <Link 
          href="/waitlist" 
          className="inline-block px-6 py-3 bg-white border border-red-600 text-red-600 hover:bg-red-50 font-medium rounded-md transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
} 