# JeevDrop Email Processing Setup

This guide explains how to set up email processing for hello@jeevdrop.org using Supabase Edge Functions instead of a DigitalOcean VPS.

## Overview

Instead of running Proton Bridge on a DigitalOcean VPS, we're using:
1. An email forwarding service that can send webhooks
2. A Supabase Edge Function that processes these webhooks
3. Direct integration with our Supabase database

## Setup Instructions

### 1. Deploy the Edge Function

```bash
# Install Supabase CLI if you haven't already
npm install -g supabase

# Log in to Supabase
supabase login

# Deploy the function
npm run supabase:deploy
```

After deployment, your webhook URL will be:
`https://xqjjrqeywreywyrstkmd.supabase.co/functions/v1/email-webhook`

### 2. Set up Email Forwarding with Webhooks

There are several services you can use to forward emails to webhooks:

#### Option A: Cloudflare Email Routing + Workers (Recommended)
1. Set up [Cloudflare Email Routing](https://developers.cloudflare.com/email-routing/)
2. Create a Cloudflare Worker that processes the email and forwards to your Supabase Function
3. Configure routing rules to send emails to your Worker

#### Option B: Mailchannels with Cloudflare Workers
1. Set up [Mailchannels](https://blog.cloudflare.com/sending-email-from-workers-with-mailchannels/)
2. Create a Worker that forwards incoming email to your Supabase Function

#### Option C: Third-party services
- [Pipedream](https://pipedream.com) offers email triggers that can send to webhooks
- [Zapier](https://zapier.com) has Email Parser + Webhooks integration
- [n8n](https://n8n.io) provides open-source workflow automation

### 3. Testing Your Setup

1. Send a test email to hello@jeevdrop.org
2. Check the Supabase Edge Function logs in the Supabase dashboard
3. Verify data is being stored in your Supabase database

## Security Considerations

1. Add authentication to your webhook endpoint
2. Set up JWT verification or API key validation
3. Implement rate limiting to prevent abuse

## Customizing Email Processing

The Edge Function (supabase/functions/email-webhook/index.ts) contains example processors for:
- Waitlist signups
- Donation information

Customize these based on your specific email formats and requirements. 