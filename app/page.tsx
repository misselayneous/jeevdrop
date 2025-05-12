import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Header Section */}
        <header className="w-full flex justify-between items-center py-8 border-b border-primary/10">
          <div className="text-xl uppercase tracking-wider font-medium">
            <span className="text-jeevred">jeev</span>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#events" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Drops</a>
            <a href="#impact" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Impact</a>
            <a href="#about" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">About</a>
            <a href="#connect" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Connect</a>
          </nav>
          <button className="text-sm uppercase tracking-wider underline hover:text-accent transition-colors">Join List</button>
        </header>

        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="page-title mb-1 lowercase">
              give blood
            </h1>
            <p className="text-xl mb-12 text-stone font-light max-w-md">
              saving lives is fun - bringing blood drives to social groups, your way
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="btn-primary">
                Book Next Drop
              </button>
              <button className="btn-secondary">
                Scan QR
              </button>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events */}
        <section id="events" className="py-20 border-t border-primary/10">
          <p className="section-title">Upcoming Drops</p>
          <h2 className="page-title mb-10">Where We'll Be.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { 
                title: "Williamsburg Weekend", 
                date: "10.22",
                location: "Berry St & N 7th",
                features: ["DJ Sets", "Photo Booth", "Free Coffee"],
                special: false
              },
              { 
                title: "Instacart x jeev", 
                date: "10.28",
                location: "Instacart HQ, SoMa",
                features: ["Corporate Social Impact Day", "Live Music", "Exclusive Merch"],
                special: true
              },
            ].map((event, index) => (
              <div 
                key={index} 
                className={`event-card ${event.special ? 'border-l-2 border-l-jeevred' : ''}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-medium">{event.title}</h3>
                    <p className="text-stone text-sm">{event.location}</p>
                  </div>
                  <span className="font-mono">{event.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {event.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="text-xs py-1 px-2 bg-sand text-stone">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-sm uppercase tracking-wider font-medium underline">
                    RSVP
                  </button>
                  <span className="text-xs text-stone">or</span>
                  <button className="text-sm text-stone">
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-end">
            <button className="text-sm uppercase tracking-wider underline hover:text-accent">All Drops →</button>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section id="impact" className="py-20 border-t border-primary/10">
          <p className="section-title">Donation Impact</p>
          <h2 className="page-title mb-12">The Numbers.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "2.3K", description: "Pints donated" },
              { number: "6.9K", description: "Lives impacted" },
              { number: "42", description: "Drops" }
            ].map((stat, index) => (
              <div key={index} className="border-t border-primary/10 pt-4">
                <h3 className="text-4xl font-normal mb-2">{stat.number}</h3>
                <p className="text-sm text-stone uppercase tracking-wider">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 border-t border-primary/10">
          <p className="section-title">The Experience</p>
          <h2 className="page-title mb-12">How It Works.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              { 
                number: "01",
                title: "Donate", 
                description: "Give blood in a vibrant space with music, art and community."
              },
              { 
                number: "02",
                title: "Choose", 
                description: "Select where your blood goes based on your passions and interests."
              },
              { 
                number: "03",
                title: "Reward", 
                description: "Enjoy free coffee, exclusive merch, and community perks."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <span className="font-mono text-sm text-stone mb-4 block">{step.number}</span>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-stone">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-primary/10">
          <p className="section-title">About jeev</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <h2 className="page-title mb-10">Our Mission.</h2>
              <p className="text-stone mb-6">
                We're creating a Gen Z blood donation movement that's cool, casual and fun. 
                jeev makes giving blood a social experience where you decide your impact.
              </p>
              <p className="text-stone">
                We partner with licensed blood banks while jeev serves as the host, 
                promoter, space curator, and experience designer.
              </p>
            </div>
            <div className="bg-sand aspect-square w-full flex items-center justify-center">
              <span className="text-stone/50 text-sm uppercase tracking-wider">Team Photo</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="connect" className="py-20 border-t border-primary/10">
          <p className="section-title">Connect With Us</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="page-title mb-10">Get In Touch.</h2>
              <form className="space-y-8">
                <div>
                  <input 
                    type="text" 
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    className="input-field"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4} 
                    className="input-field resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn-primary"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium mb-6">Follow Our Drops</h3>
              <a 
                href="https://instagram.com/jeevdrop" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-4 mb-12 hover:text-accent transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm uppercase tracking-wider">@jeev</span>
              </a>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-sand aspect-square w-full flex items-center justify-center">
                  <span className="text-stone/50 text-xs">Drop 01</span>
                </div>
                <div className="bg-sand aspect-square w-full flex items-center justify-center">
                  <span className="text-stone/50 text-xs">Drop 02</span>
                </div>
                <div className="bg-sand aspect-square w-full flex items-center justify-center">
                  <span className="text-stone/50 text-xs">Drop 03</span>
                </div>
                <div className="bg-sand aspect-square w-full flex items-center justify-center">
                  <span className="text-stone/50 text-xs">Drop 04</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-primary/10 text-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="uppercase tracking-wider mb-6">jeev</h3>
              <p className="text-stone text-xs">Give blood your way.</p>
            </div>
            <div>
              <h4 className="uppercase tracking-wider mb-6">Nav</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-stone hover:text-accent transition-colors">Home</a></li>
                <li><a href="#events" className="text-stone hover:text-accent transition-colors">Drops</a></li>
                <li><a href="#impact" className="text-stone hover:text-accent transition-colors">Impact</a></li>
                <li><a href="#about" className="text-stone hover:text-accent transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-wider mb-6">Social</h4>
              <ul className="space-y-3">
                <li><a href="#connect" className="text-stone hover:text-accent transition-colors">Contact</a></li>
                <li><a href="#" className="text-stone hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="text-stone hover:text-accent transition-colors">Partner</a></li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-wider mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-stone hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="text-stone hover:text-accent transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="text-xs text-stone">
            © {new Date().getFullYear()} jeev. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  )
} 