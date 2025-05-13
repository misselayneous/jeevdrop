import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-red-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="block text-red-700">Jeev Drop</span>
              <span className="block">Blood donation, simplified</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We bring blood donation drives directly to communities without easy access to donation centers.
              Join our movement to increase blood donations and save lives.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/donate"
                className="rounded-md bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Donate Blood
              </Link>
              <Link href="/events" className="text-lg font-semibold leading-6 text-gray-900">
                View Events <span aria-hidden="true">→</span>
              </Link>
              <Link href="/waitlist" className="text-lg font-semibold leading-6 text-gray-900">
                Join Waitlist <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">How It Works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A new approach to blood donation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Jeev Drop brings blood donation drives to communities without easy access to donation centers.
              We make the process simple, accessible, and rewarding.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  Donation Rewards
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We reward your generosity! Earn free coffee, Jeev t-shirts, cash rewards up to $1000, 
                  and exclusive merchandise as you donate.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </div>
                  Community-Focused
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We focus on underserved communities and areas without convenient donation centers, 
                  bringing the blood donation process directly to people.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  Simple Process
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  No complicated scheduling or travel to distant locations. Join our waitlist,
                  and we'll notify you when a Jeev Drop is happening near you.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </div>
                  Stay Updated
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Join our newsletter to receive company/brand updates and timeline notifications 
                  to stay in the loop with our latest initiatives.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Rewards section */}
      <div className="bg-red-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Earn Rewards As You Save Lives
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every donation gets you closer to exclusive rewards. Track your progress on your donor dashboard.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-3 sm:gap-y-16 lg:mx-0 lg:max-w-none">
            <div className="text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-red-100 p-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-600 text-white">
                    1
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">First Donation</h3>
              <p className="mt-2 text-base text-gray-600">
                Receive a free coffee or photo booth voucher with your first pint donated
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-red-100 p-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-600 text-white">
                    5
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Five Donations</h3>
              <p className="mt-2 text-base text-gray-600">
                Earn a limited-edition Jeev t-shirt and $500 cash reward
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-red-100 p-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-600 text-white">
                    10
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Ten Donations</h3>
              <p className="mt-2 text-base text-gray-600">
                Receive $1000 cash and exclusive merchandise as our biggest thanks
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-red-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to make a difference?
              <br />
              Join the Jeev Drop movement today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-red-100">
              Whether you're looking to donate blood or stay informed about drops in your area,
              we make it easy to get involved and save lives.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <Link
                href="/donate"
                className="rounded-md bg-white px-5 py-3 text-lg font-semibold text-red-700 shadow-sm hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Donate Blood
              </Link>
              <Link
                href="/events"
                className="text-base font-semibold leading-6 text-white"
              >
                View Events <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/dashboard"
                className="text-base font-semibold leading-6 text-white"
              >
                View Dashboard <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 