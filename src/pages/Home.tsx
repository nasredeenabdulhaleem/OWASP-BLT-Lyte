import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import About from '../components/home/About';

import Hero from '@/components/home/Hero';
import LatestActivity from '@/components/home/LatestActivity';
import Leaderboard from '@/components/home/Leaderboard';
import OurComponent from '@/components/home/OurComponent';

export default function Home(): React.JSX.Element {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    // Mock subscription logic
    toast.success('Thanks for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Hero />
      <About />
      <OurComponent />
      <Leaderboard />
      <LatestActivity />

      {/* Newsletter section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-24 lg:flex lg:gap-x-20 lg:px-24">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#e74c3c" />
                <stop offset={1} stopColor="#e74c3c" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-8 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay updated.
              <br />
              Join our newsletter.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get the latest security news, tips, and updates delivered to your inbox.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:flex-shrink-0">
            <form className="w-full sm:max-w-xl" onSubmit={handleNewsletter}>
              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                We care about your data. Read our{' '}
                <Link to="/privacy-policy" className="font-semibold text-white">
                  privacy&nbsp;policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
