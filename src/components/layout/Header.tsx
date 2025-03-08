import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-surface-light dark:bg-surface-dark shadow-elevation-1 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="/logos/owasp-blt-logo.svg"
                alt="OWASP BLT"
                className="h-8 w-auto"
                width={32}
                height={32}
              />
            </Link>
            <nav className="hidden md:ml-6 md:flex space-x-4">
              <Link
                to="/dashboard"
                className="px-3 py-2 rounded-md text-sm font-medium text-text-light-primary dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Dashboard
              </Link>
              <Link
                to="/bugs"
                className="px-3 py-2 rounded-md text-sm font-medium text-text-light-primary dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Bugs
              </Link>
              <Link
                to="/leaderboard"
                className="px-3 py-2 rounded-md text-sm font-medium text-text-light-primary dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Leaderboard
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
            <div className="hidden md:flex items-center">
              <Link to="/login" className="md-button-outlined mr-2">
                Log in
              </Link>
              <Link to="/register" className="md-button-primary">
                Sign up
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-surface-light dark:bg-surface-dark">
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-text-light-primary dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Dashboard
            </Link>
            <Link
              to="/bugs"
              className="block px-3 py-2 rounded-md text-base font-medium text-text-light-primary dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Bugs
            </Link>
            <Link
              to="/leaderboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-text-light-primary dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Leaderboard
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
