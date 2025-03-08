// src/components/home/Leaderboard.tsx
import { motion } from 'framer-motion';
import { Bug, Award, GitPullRequest, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// User types for different leaderboards
interface BaseUser {
  id: number;
  username: string;
  avatarUrl: string;
  profileUrl: string;
}

type TopEarner = BaseUser & {
  earnings: number;
  currency: string;
};

type BugReporter = BaseUser & {
  bugsReported: number;
  impactScore: number;
};

type PRContributor = BaseUser & {
  prsSubmitted: number;
  linesOfCode: number;
};

type Referrer = BaseUser & {
  referrals: number;
  conversionRate: number;
};

export default function Leaderboard(): React.JSX.Element {
  // Mock data - in a real app, this would come from an API
  const topEarners: TopEarner[] = [
    {
      id: 1,
      username: 'securehunter',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      profileUrl: '/profile/securehunter',
      earnings: 7850,
      currency: 'USD',
    },
    {
      id: 2,
      username: 'whitehat_alice',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      profileUrl: '/profile/whitehat_alice',
      earnings: 6420,
      currency: 'USD',
    },
    {
      id: 3,
      username: 'bugbounty_pro',
      avatarUrl: 'https://randomuser.me/api/portraits/men/67.jpg',
      profileUrl: '/profile/bugbounty_pro',
      earnings: 5930,
      currency: 'USD',
    },
  ];

  const topBugReporters: BugReporter[] = [
    {
      id: 1,
      username: 'vulnerabilityfinder',
      avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      profileUrl: '/profile/vulnerabilityfinder',
      bugsReported: 87,
      impactScore: 923,
    },
    {
      id: 2,
      username: 'securehunter',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      profileUrl: '/profile/securehunter',
      bugsReported: 74,
      impactScore: 845,
    },
    {
      id: 3,
      username: 'codedefender',
      avatarUrl: 'https://randomuser.me/api/portraits/men/41.jpg',
      profileUrl: '/profile/codedefender',
      bugsReported: 68,
      impactScore: 782,
    },
  ];

  const topPRContributors: PRContributor[] = [
    {
      id: 1,
      username: 'codemaster',
      avatarUrl: 'https://randomuser.me/api/portraits/men/55.jpg',
      profileUrl: '/profile/codemaster',
      prsSubmitted: 142,
      linesOfCode: 24680,
    },
    {
      id: 2,
      username: 'devguru',
      avatarUrl: 'https://randomuser.me/api/portraits/women/37.jpg',
      profileUrl: '/profile/devguru',
      prsSubmitted: 128,
      linesOfCode: 19850,
    },
    {
      id: 3,
      username: 'opensourcehero',
      avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      profileUrl: '/profile/opensourcehero',
      prsSubmitted: 113,
      linesOfCode: 18340,
    },
  ];

  const topReferrers: Referrer[] = [
    {
      id: 1,
      username: 'communitybuilder',
      avatarUrl: 'https://randomuser.me/api/portraits/men/29.jpg',
      profileUrl: '/profile/communitybuilder',
      referrals: 76,
      conversionRate: 68.4,
    },
    {
      id: 2,
      username: 'networkpro',
      avatarUrl: 'https://randomuser.me/api/portraits/women/62.jpg',
      profileUrl: '/profile/networkpro',
      referrals: 64,
      conversionRate: 72.1,
    },
    {
      id: 3,
      username: 'influencer',
      avatarUrl: 'https://randomuser.me/api/portraits/men/83.jpg',
      profileUrl: '/profile/influencer',
      referrals: 58,
      conversionRate: 65.2,
    },
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary">
            Leaderboard
          </h2>
          <p className="mt-4 text-lg text-text-light-secondary dark:text-text-dark-secondary">
            Celebrating our top contributors and their achievements in securing the web
          </p>
        </motion.div>

        {/* All leaderboards in a grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Earners */}
          <motion.div
            className="md-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium leading-6 text-text-light-primary dark:text-text-dark-primary flex items-center">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <Award className="h-5 w-5 text-yellow-500 mr-2" />
                </motion.div>
                <span>Top Earners</span>
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-text-light-secondary dark:text-text-dark-secondary">
                Users with highest earnings from bug bounties
              </p>
            </div>
            <motion.ul
              className="divide-y divide-gray-200 dark:divide-gray-700"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {topEarners.map((user, index) => (
                <motion.li
                  key={user.id}
                  variants={itemVariants}
                  className="py-4 px-4 sm:px-6 flex items-center justify-between"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.025)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center">
                    <span className="text-lg font-medium text-text-light-secondary dark:text-text-dark-secondary mr-3 w-5 text-center">
                      {index + 1}
                    </span>
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.avatarUrl}
                        alt={user.username}
                      />
                    </div>
                    <div className="ml-4">
                      <Link
                        to={user.profileUrl}
                        className="text-base font-medium text-text-light-primary dark:text-text-dark-primary hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        {user.username}
                      </Link>
                    </div>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-text-light-primary dark:text-text-dark-primary">
                      ${user.earnings.toLocaleString()}
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <div className="py-3 px-6 bg-gray-50 dark:bg-gray-900 rounded-b-lg border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/leaderboard/earners"
                className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 flex items-center justify-center"
              >
                View full leaderboard
              </Link>
            </div>
          </motion.div>

          {/* Top Bug Reporters */}
          <motion.div
            className="md-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium leading-6 text-text-light-primary dark:text-text-dark-primary flex items-center">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <Bug className="h-5 w-5 text-green-500 mr-2" />
                </motion.div>
                <span>Top Bug Reporters</span>
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-text-light-secondary dark:text-text-dark-secondary">
                Users who found the most security vulnerabilities
              </p>
            </div>
            <motion.ul
              className="divide-y divide-gray-200 dark:divide-gray-700"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {topBugReporters.map((user, index) => (
                <motion.li
                  key={user.id}
                  variants={itemVariants}
                  className="py-4 px-4 sm:px-6 flex items-center justify-between"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.025)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center">
                    <span className="text-lg font-medium text-text-light-secondary dark:text-text-dark-secondary mr-3 w-5 text-center">
                      {index + 1}
                    </span>
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.avatarUrl}
                        alt={user.username}
                      />
                    </div>
                    <div className="ml-4">
                      <Link
                        to={user.profileUrl}
                        className="text-base font-medium text-text-light-primary dark:text-text-dark-primary hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        {user.username}
                      </Link>
                      <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
                        Impact Score: {user.impactScore}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-text-light-primary dark:text-text-dark-primary">
                      {user.bugsReported} bugs
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <div className="py-3 px-6 bg-gray-50 dark:bg-gray-900 rounded-b-lg border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/leaderboard/bugs"
                className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 flex items-center justify-center"
              >
                View full leaderboard
              </Link>
            </div>
          </motion.div>

          {/* Top PR Contributors */}
          <motion.div
            className="md-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium leading-6 text-text-light-primary dark:text-text-dark-primary flex items-center">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <GitPullRequest className="h-5 w-5 text-blue-500 mr-2" />
                </motion.div>
                <span>Top PR Contributors</span>
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-text-light-secondary dark:text-text-dark-secondary">
                Users with most code contributions
              </p>
            </div>
            <motion.ul
              className="divide-y divide-gray-200 dark:divide-gray-700"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {topPRContributors.map((user, index) => (
                <motion.li
                  key={user.id}
                  variants={itemVariants}
                  className="py-4 px-4 sm:px-6 flex items-center justify-between"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.025)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center">
                    <span className="text-lg font-medium text-text-light-secondary dark:text-text-dark-secondary mr-3 w-5 text-center">
                      {index + 1}
                    </span>
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.avatarUrl}
                        alt={user.username}
                      />
                    </div>
                    <div className="ml-4">
                      <Link
                        to={user.profileUrl}
                        className="text-base font-medium text-text-light-primary dark:text-text-dark-primary hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        {user.username}
                      </Link>
                      <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
                        {user.linesOfCode.toLocaleString()} lines of code
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-text-light-primary dark:text-text-dark-primary">
                      {user.prsSubmitted} PRs
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <div className="py-3 px-6 bg-gray-50 dark:bg-gray-900 rounded-b-lg border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/leaderboard/contributors"
                className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 flex items-center justify-center"
              >
                View full leaderboard
              </Link>
            </div>
          </motion.div>

          {/* Top Referrers */}
          <motion.div
            className="md-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium leading-6 text-text-light-primary dark:text-text-dark-primary flex items-center">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <Users className="h-5 w-5 text-purple-500 mr-2" />
                </motion.div>
                <span>Top Referrers</span>
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-text-light-secondary dark:text-text-dark-secondary">
                Users who brought in the most new members
              </p>
            </div>
            <motion.ul
              className="divide-y divide-gray-200 dark:divide-gray-700"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {topReferrers.map((user, index) => (
                <motion.li
                  key={user.id}
                  variants={itemVariants}
                  className="py-4 px-4 sm:px-6 flex items-center justify-between"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.025)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center">
                    <span className="text-lg font-medium text-text-light-secondary dark:text-text-dark-secondary mr-3 w-5 text-center">
                      {index + 1}
                    </span>
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.avatarUrl}
                        alt={user.username}
                      />
                    </div>
                    <div className="ml-4">
                      <Link
                        to={user.profileUrl}
                        className="text-base font-medium text-text-light-primary dark:text-text-dark-primary hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        {user.username}
                      </Link>
                      <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
                        {user.conversionRate}% conversion rate
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-text-light-primary dark:text-text-dark-primary">
                      {user.referrals} referrals
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <div className="py-3 px-6 bg-gray-50 dark:bg-gray-900 rounded-b-lg border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/leaderboard/referrals"
                className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 flex items-center justify-center"
              >
                View full leaderboard
              </Link>
            </div>
          </motion.div>
        </div>

        {/* View All Leaderboards CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/leaderboard" className="md-button-primary inline-flex items-center">
            View All Leaderboards
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
