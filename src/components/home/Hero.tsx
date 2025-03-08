import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import AnimatedIcon from '@/components/ui/AnimatedIcon';

export default function Hero(): React.JSX.Element {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Simple background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(231,76,60,0.07)_0%,rgba(0,0,0,0)_70%)]"></div>
        <svg
          className="absolute right-0 top-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-gray-800 opacity-20"
          aria-hidden="true"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMaxYMid slice"
        >
          <pattern
            id="modern-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="0"
            patternTransform="translate(0,0) scale(0.5)"
          >
            <rect width="100%" height="100%" fill="none" />
            <path d="M0 0L40 0L40 40L0 40Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#modern-grid)" />
        </svg>
      </div>

      {/* Hero content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-300 mb-6"
              >
                OWASP Project <span className="mx-1">•</span> Bug Bounty Platform
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary sm:text-6xl"
              >
                Secure the Web, <br />
                <span className="text-primary-600 dark:text-primary-400">Get Rewarded</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 text-lg leading-8 text-text-light-secondary dark:text-text-dark-secondary"
              >
                Strengthen worldwide applications by finding and fixing security & coding issues
                through bug bounties and issue rewards. Earn money via GitHub Sponsors & BCH and get
                recognized with BACON, the first open-source security token on Bitcoin Runes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
              >
                <Link to="/register" className="md-button-primary">
                  Get started
                </Link>
                <Link
                  to="/learn-more"
                  className="text-sm font-semibold leading-6 text-text-light-primary dark:text-text-dark-primary flex items-center gap-1 hover:text-primary-500"
                >
                  Learn more <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: 'spring',
                stiffness: 100,
              }}
              className="relative"
            >
              {/* Hero graphic */}
              <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/10 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2.5,
                  }}
                  className="absolute w-full h-full rounded-full border border-primary-200 dark:border-primary-700/30"
                ></motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 3,
                    delay: 0.5,
                  }}
                  className="absolute w-[85%] h-[85%] rounded-full border border-primary-300 dark:border-primary-600/30"
                ></motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.07, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 3.5,
                    delay: 1,
                  }}
                  className="absolute w-[70%] h-[70%] rounded-full border border-primary-400 dark:border-primary-500/30"
                ></motion.div>

                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <motion.img
                    src="/logos/owasp-blt-logo.svg"
                    alt="OWASP BLT"
                    className="h-40 w-40 drop-shadow-xl"
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>

                {/* Floating icons - animated with Framer Motion */}
                <AnimatedIcon
                  iconType="Shield"
                  positionClassName="absolute -top-5 -left-5"
                  colorClassName="text-primary-500"
                  hoverScale={1.2}
                  floatAnimation={{
                    y: ['-5px', '5px', '-5px'],
                    rotate: [0, -5, 0],
                  }}
                  duration={4}
                />

                <AnimatedIcon
                  iconType="Lock"
                  positionClassName="absolute -bottom-3 -left-8"
                  colorClassName="text-green-500"
                  hoverScale={1.2}
                  floatAnimation={{
                    y: ['5px', '-5px', '5px'],
                    rotate: [0, 5, 0],
                  }}
                  duration={3.5}
                  delay={0.5}
                />

                <AnimatedIcon
                  iconType="Search"
                  positionClassName="absolute -right-2 top-1/3"
                  colorClassName="text-blue-500"
                  hoverScale={1.2}
                  floatAnimation={{
                    x: ['5px', '-5px', '5px'],
                    rotate: [0, 10, 0],
                  }}
                  duration={4.5}
                  delay={1}
                />

                {/* Additional animated icons for more visual interest */}
                <AnimatedIcon
                  iconType="BugIcon"
                  positionClassName="absolute bottom-12 -right-8"
                  colorClassName="text-red-500"
                  hoverScale={1.2}
                  floatAnimation={{
                    y: ['-7px', '7px', '-7px'],
                    rotate: [0, 5, 0],
                  }}
                  duration={5}
                  delay={1.5}
                />

                <AnimatedIcon
                  iconType="Code"
                  positionClassName="absolute top-10 -right-3"
                  colorClassName="text-amber-500"
                  hoverScale={1.2}
                  floatAnimation={{
                    y: ['3px', '-3px', '3px'],
                    x: ['3px', '-3px', '3px'],
                  }}
                  duration={3}
                  delay={0.7}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
