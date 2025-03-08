import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Bug,
  PlusCircle,
  Trophy,
  UserCircle,
  Settings,
  LogOut,
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        {children}
      </div>
      {showTooltip && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-50">
          {text}
        </div>
      )}
    </div>
  );
};

export default function Sidebar({ isOpen, onClose }: SidebarProps): React.JSX.Element {
  const location = useLocation();

  const navItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'My Bugs',
      path: '/my-bugs',
      icon: Bug,
    },
    {
      name: 'Submit Bug',
      path: '/submit-bug',
      icon: PlusCircle,
    },
    {
      name: 'Leaderboard',
      path: '/leaderboard',
      icon: Trophy,
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: UserCircle,
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-surface-light dark:bg-surface-dark shadow-elevation-2 transform transition-transform duration-200 ease-in-out z-30 
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          w-16 md:w-64`} // Modified width classes
      >
        <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
          <div onClick={onClose} className="text-primary-500 font-bold text-xl hidden md:block">
            OWASP BLT
          </div>
          <div onClick={onClose} className="text-primary-500 font-bold text-xl md:hidden">
            BLT
          </div>
        </div>

        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <div key={item.name} className="md:block">
                  {/* Mobile view (icon only with tooltip) */}
                  <div className="md:hidden">
                    <Tooltip text={item.name}>
                      <Link
                        to={item.path}
                        className={`flex items-center justify-center p-2 rounded-md ${
                          isActive
                            ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-20'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            isActive
                              ? 'text-primary-500'
                              : 'text-text-light-secondary dark:text-text-dark-secondary'
                          }`}
                        />
                      </Link>
                    </Tooltip>
                  </div>

                  {/* Desktop view (icon + text) */}
                  <Link
                    to={item.path}
                    className={`hidden md:flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-20 text-primary-600 dark:text-primary-400'
                        : 'text-text-light-primary dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon
                      className={`mr-3 h-5 w-5 ${
                        isActive
                          ? 'text-primary-500'
                          : 'text-text-light-secondary dark:text-text-dark-secondary'
                      }`}
                    />
                    <span>{item.name}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>

        {/* Logout button */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
          {/* Mobile view */}
          <div className="md:hidden">
            <Tooltip text="Log out">
              <button className="w-full p-2 bg-red-100 text-red-600 dark:bg-red-900 dark:bg-opacity-20 dark:text-red-400 rounded-md flex items-center justify-center">
                <LogOut className="h-6 w-6" />
              </button>
            </Tooltip>
          </div>

          {/* Desktop view */}
          <button className="hidden md:flex w-full px-4 py-2 bg-red-100 text-red-600 dark:bg-red-900 dark:bg-opacity-20 dark:text-red-400 rounded-md items-center justify-center">
            <LogOut className="h-5 w-5 mr-2" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
