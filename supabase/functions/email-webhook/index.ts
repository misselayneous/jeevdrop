// Follow this setup guide to integrate the Deno runtime:
// https://deno.land/manual/getting_started/setup_your_environment

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Create a Supabase client with the Admin key
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get the email data from the request
    const emailData = await req.json();
    
    console.log("Received email webhook:", JSON.stringify(emailData));
    
    // Validate the webhook signature or API key if your email service provides one
    // This step depends on which email webhook service you're using
    
    // Extract relevant information from the email
    // This will vary based on the webhook provider's format
    const {
      from,
      to,
      subject,
      textBody,
      htmlBody,
      // Add other fields you need
    } = emailData;
    
    // Process based on email content - examples:
    
    // Example 1: Add to waitlist if it contains specific keywords
    if (subject.toLowerCase().includes("waitlist") || 
        textBody.toLowerCase().includes("waitlist")) {
      
      // Extract email address from the body or parse structured data
      // This is just an example - adapt to your actual email format
      const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
      const emailMatch = textBody.match(emailRegex);
      const zipRegex = /\b\d{5}\b/; // Simple US zip code regex
      const zipMatch = textBody.match(zipRegex);
      
      if (emailMatch) {
        const email = emailMatch[0];
        const zip = zipMatch ? zipMatch[0] : "00000"; // Default or extracted zip
        
        // Add to waitlist
        const { data, error } = await supabase
          .from('waitlist_entries')
          .insert([{ email, zip }]);
          
        if (error) {
          console.error("Error adding to waitlist:", error);
        } else {
          console.log("Added to waitlist:", email);
        }
      }
    }
    
    // Example 2: Record donation information
    if (subject.toLowerCase().includes("donation") || 
        textBody.toLowerCase().includes("donat")) {
      
      // Process donation information
      // This would need more complex parsing based on your donation email format
      console.log("Donation email received, processing...");
      
      // You would add custom parsing logic here
    }
    
    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );
    
  } catch (error) {
    console.error("Error processing webhook:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400 
      }
    );
  }
}); 