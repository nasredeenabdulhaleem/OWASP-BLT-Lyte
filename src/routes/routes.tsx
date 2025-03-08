import { AnimatePresence } from 'framer-motion';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MainLayout from '@/components/layout/MainLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import NotFound from '@/pages/NotFound';
import { Route, Routes, useLocation } from 'react-router-dom';

// Wrap routes with AnimatePresence for page transitions
const AnimatedRoutes: React.FC = (): React.JSX.Element => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Public routes */}
        <Route path="/" element={<MainLayout />}>
          {/* Public nested routes go here */}
          <Route index element={<Home />} />
          <Route path="about" element={<div>About Page</div>} />
        </Route>

        {/* Protected dashboard routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Dashboard nested routes go here */}
          <Route index element={<div>Dashboard Home</div>} />
          <Route path="my-bugs" element={<div>My Bugs</div>} />
        </Route>

        {/* 404 Not Found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
