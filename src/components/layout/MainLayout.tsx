import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import useTheme from '@/hooks/useTheme';

export default function MainLayout(): React.JSX.Element {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
