"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

type WaitlistForm = {
  email: string;
  zip: string;
};

export default function WaitlistPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<WaitlistForm>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: WaitlistForm) => {
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 px-6">
      <h1 className="text-3xl font-bold mb-4 text-red-700">Join the Jeev Drop Waitlist</h1>
      <p className="mb-6 text-gray-600">
        Sign up to be notified when blood donation events are happening near you. Join our newsletter 
        for company updates and to stay informed about our latest initiatives.
      </p>

      {submitted || isSubmitSuccessful ? (
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800 mb-2">Thanks for Joining!</h2>
          <p className="text-green-700">
            You're on the list! We'll notify you about upcoming blood donation events in your area
            and keep you updated with our newsletter.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              type="email"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
              ZIP Code
            </label>
            <input
              {...register("zip", {
                required: "ZIP code is required",
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: "Enter a valid 5-digit ZIP code",
                },
              })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="10001"
            />
            {errors.zip && <p className="text-sm text-red-500">{errors.zip.message}</p>}
          </div>

          <div className="mt-2 text-sm text-gray-500">
            By joining, you'll receive email updates about blood donation events and our newsletter. 
            You can unsubscribe at any time.
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition"
          >
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </button>
        </form>
      )}
    </div>
  );
} 