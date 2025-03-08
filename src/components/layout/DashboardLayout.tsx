import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useTheme from '@/hooks/useTheme';
import Sidebar from './Sidebar';
import { Menu, Sun, Moon, Bell } from 'lucide-react';

interface HeaderProps {
  onSidebarOpen: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Header({ onSidebarOpen, darkMode, toggleDarkMode }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);

  return (
    <header className="bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:dark:divide-gray-700">
        <div className="relative h-16 flex justify-between">
          <div className="relative z-10 px-2 flex lg:px-0">
            <button
              type="button"
              className="p-2 rounded-md text-text-light-secondary dark:text-text-dark-secondary hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
              onClick={onSidebarOpen}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="relative z-10 flex items-center lg:hidden">
            <img className="h-8 w-auto" src="/logos/owasp-blt-logo.svg" alt="OWASP BLT" />
          </div>

          <div className="relative z-10 flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-text-light-secondary dark:text-text-dark-secondary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle dark mode</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                type="button"
                className="p-2 text-text-light-secondary dark:text-text-dark-secondary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <span className="sr-only">View notifications</span>
                <Bell className="h-5 w-5" />
                {/* Notification badge */}
                <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white dark:ring-gray-800" />
              </button>

              {/* Notifications dropdown */}
              {showNotifications && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-surface-light dark:bg-surface-dark ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-text-light-primary dark:text-text-dark-primary">
                      Notifications
                    </h3>
                  </div>
                  {/* Notification items would go here */}
                  <div className="px-4 py-2 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                    No new notifications
                  </div>
                </div>
              )}
            </div>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center p-2 text-text-light-secondary dark:text-text-dark-secondary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setShowProfile(!showProfile)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://www.gravatar.com/avatar/?d=mp"
                  alt="User avatar"
                />
              </button>
              {showProfile && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-surface-light dark:bg-surface-dark ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-text-light-primary dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Your Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-sm text-text-light-primary dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Settings
                  </a>
                  <button className="block w-full text-left px-4 py-2 text-sm text-text-light-primary dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800">
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function DashboardLayout(): React.JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="md:pl-64 flex flex-col flex-1">
        <Header
          onSidebarOpen={() => setSidebarOpen(true)}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
