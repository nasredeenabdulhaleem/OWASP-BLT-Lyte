import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-max mx-auto text-center">
        <main>
          <div className="max-w-xl mx-auto">
            {/* 404 Image/Illustration */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center text-4xl md:text-7xl font-bold">
                <span className="px-4 bg-background-light dark:bg-background-dark text-primary-500">
                  404
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h1 className="text-2xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary sm:text-4xl">
                Page not found
              </h1>
              <p className="mt-4 text-base text-text-light-secondary dark:text-text-dark-secondary">
                Sorry, we couldn't find the page you're looking for. It might have been moved or
                deleted.
              </p>

              {/* Action buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="md-button-primary inline-flex items-center justify-center gap-2"
                >
                  <Home className="h-5 w-5" />
                  Back to home
                </Link>
                <Link
                  to="/search"
                  className="md-button-outlined inline-flex items-center justify-center gap-2"
                >
                  <Search className="h-5 w-5" />
                  Search site
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="md-button-text inline-flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Go back
                </button>
              </div>

              {/* Help section */}
              <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                <h2 className="text-lg font-medium text-text-light-primary dark:text-text-dark-primary">
                  Need help?
                </h2>
                <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a
                    href="https://docs.blt.owasp.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Visit documentation
                  </a>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  <a
                    href="https://github.com/OWASP/BLT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Report an issue
                  </a>
                  <span className="hidden sm:inline text-gray-400">|</span>
                  <a
                    href="mailto:support@blt.owasp.org"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Contact support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
