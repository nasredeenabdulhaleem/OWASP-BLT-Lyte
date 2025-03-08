import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedRoutes from './routes/routes';

function App(): React.JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [darkMode, _setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <Router>
      <ToastContainer
        position="top-right"
        theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
      />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
