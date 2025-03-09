import { Shield, Award, Target, Zap, BookOpen, ExternalLink } from 'lucide-react';
import type { JSX } from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = (): JSX.Element => {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      {/* Core Features Section */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
              Core Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary sm:text-4xl">
              Everything you need to secure applications
            </p>
            <p className="mt-6 text-lg leading-8 text-text-light-secondary dark:text-text-dark-secondary">
              Our platform provides powerful tools and incentives to improve web security
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 mx-auto">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Shield className="feature-icon" aria-hidden="true" />
                </div>
                <dt className="text-base font-semibold leading-7 text-text-light-primary dark:text-text-dark-primary">
                  Protect Applications
                </dt>
                <dd className="mt-2 text-base leading-7 text-text-light-secondary dark:text-text-dark-secondary">
                  Safeguard your applications from security vulnerabilities by harnessing the power
                  of community-driven security testing.
                </dd>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Award className="feature-icon" aria-hidden="true" />
                </div>
                <dt className="text-base font-semibold leading-7 text-text-light-primary dark:text-text-dark-primary">
                  Earn Rewards
                </dt>
                <dd className="mt-2 text-base leading-7 text-text-light-secondary dark:text-text-dark-secondary">
                  Get rewarded for your security findings with monetary compensation,
                  cryptocurrencies, and recognition through our BACON token system.
                </dd>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Target className="feature-icon" aria-hidden="true" />
                </div>
                <dt className="text-base font-semibold leading-7 text-text-light-primary dark:text-text-dark-primary">
                  View Bounties
                </dt>
                <dd className="mt-2 text-base leading-7 text-text-light-secondary dark:text-text-dark-secondary">
                  Explore available bounties from top companies and open-source projects.
                </dd>
                <div className="mt-4">
                  <a
                    href="https://blt.owasp.org/bounties/"
                    className="feature-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browse bounties <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-10 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
              Advanced Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary sm:text-4xl">
              Take security to the next level
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 mx-auto">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-text-light-primary dark:text-text-dark-primary">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Automate Security
                </dt>
                <dd className="mt-2 text-base leading-7 text-text-light-secondary dark:text-text-dark-secondary">
                  Streamline your security workflows with automated testing, reporting, and
                  vulnerability management tools.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-text-light-primary dark:text-text-dark-primary">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <BookOpen className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex items-center">
                    Learn & Grow
                    <span className="ml-2 inline-flex items-center rounded-md bg-primary-50 dark:bg-primary-900 dark:bg-opacity-30 px-2 py-1 text-xs font-medium text-primary-700 dark:text-primary-300">
                      NEW
                    </span>
                  </div>
                </dt>
                <dd className="mt-2 text-base leading-7 text-text-light-secondary dark:text-text-dark-secondary">
                  Access expert-led security courses to enhance your skills and stay updated with
                  the latest security practices.
                </dd>
                <div className="mt-4">
                  <a
                    href="https://blt.owasp.org/education/"
                    className="feature-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Learning <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to join the community?
            </h2>
            <p className="mt-2 text-lg leading-8 text-white text-opacity-80">
              Start finding bugs, earning rewards, and making the web safer today.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="px-6 py-3 text-base font-semibold text-primary-600 bg-white rounded-md shadow hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 text-base font-semibold text-white border border-white rounded-md hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* OWASP Connection */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-4">
              Part of the OWASP Foundation
            </h2>
            <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6">
              OWASP BLT is a production project of the Open Worldwide Application Security Project,
              a nonprofit foundation working to improve software security.
            </p>
            <a
              href="https://owasp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="md-button-primary inline-flex items-center"
            >
              Learn more about OWASP <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
