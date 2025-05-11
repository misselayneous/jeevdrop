# Jeev Drop - Give Blood Your Way

A modern, responsive landing page for Jeev Drop, a Gen Z–driven blood donation platform that makes giving blood a cultural experience.

## Project Features

The landing page includes:
- Modern, Gen Z-oriented design with a streetwear-meets-wellness aesthetic
- "Give Blood Your Way" headline with waitlist and booking functionality
- Upcoming drop events with RSVP capabilities
- Blood donation impact statistics section
- The Jeev Experience section highlighting donation, documentation, and rewards
- About section with company mission
- Contact form with Instagram integration
- Footer with navigation and copyright

## Prerequisites

Before you can run this project, you need to have Node.js and npm installed on your system.

## Setup Instructions

1. Install Node.js and npm
   - Download and install from [https://nodejs.org/](https://nodejs.org/)

2. Clone this repository
   ```bash
   git clone https://github.com/yourusername/jeevdrop.git
   cd jeevdrop
   ```

3. Install project dependencies
   ```bash
   npm install
   ```

4. Install TypeScript type definitions for React (to resolve linter errors)
   ```bash
   npm install --save-dev @types/react @types/react-dom
   ```

5. Run the development server
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

To build the project for production, run:
```bash
npm run build
```

Then start the production server:
```bash
npm start
```

## Project Technology Stack

- Next.js - Modern React framework
- TypeScript - Type safety
- Tailwind CSS - Utility-first styling
- Inter font - Clean, Gen Z-friendly typography

## Customization

You can customize the content and styling by editing:
- `app/page.tsx` - Main landing page content
- `app/globals.css` - Global CSS styles
- `tailwind.config.js` - Tailwind configuration including colors and fonts

## Brand Guidelines

- **Brand tone**: Bold, compassionate, streetwear-meets-wellness
- **Color palette**: Minimalist neutral color scheme featuring muted earth tones, with deep red as an accent (not primary)
- **Font**: Inter - Clean, Gen Z–friendly
- **Language**: Minimal, poetic, Gen Z-tuned (not clinical or charity-speak)

## License

This project is licensed under the MIT License. 