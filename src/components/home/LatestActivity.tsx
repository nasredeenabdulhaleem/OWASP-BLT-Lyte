import { Plus, MessageSquare, GitFork, ExternalLink, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LatestActivity(): React.JSX.Element {
  // Mock repository data - would come from API in production

  interface Repository {
    id: number;
    name: string;
    description: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    owner: {
      id: number;
      name: string;
      avatarUrl: string;
    };
  }

  interface Discussion {
    id: number;
    title: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  }

  const repositories: Repository[] = [];

  // Mock discussions data - would come from API in production
  const discussions: Discussion[] = [];

  return (
    <section className="py-16 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary">
            Latest Activity
          </h2>
          <p className="mt-4 text-lg text-text-light-secondary dark:text-text-dark-secondary">
            Stay updated with the newest repositories and community discussions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Latest Repositories */}
          <div className="md-card">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium leading-6 text-text-light-primary dark:text-text-dark-primary flex items-center">
                  <GitFork className="h-5 w-5 text-primary-500 mr-2" />
                  <span>Latest Repositories</span>
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-text-light-secondary dark:text-text-dark-secondary">
                  ({repositories.length} total)
                </p>
              </div>
              <Link
                to="/repositories/add"
                className="px-3 py-1.5 bg-primary-500 text-white rounded-md text-sm font-medium hover:bg-primary-600 flex items-center"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Repo
              </Link>
            </div>

            <div className="p-6 min-h-[200px] flex flex-col justify-center items-center">
              {repositories.length > 0 ? (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700 w-full">
                  {repositories.map((repo) => (
                    <li key={repo.id} className="py-4">
                      {/* Repository display code would go here */}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center">
                  <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-text-light-primary dark:text-text-dark-primary">
                    No repositories yet
                  </h3>
                  <p className="mt-1 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                    Add a repository to get started with bug tracking.
                  </p>
                </div>
              )}
            </div>

            <div className="py-3 px-6 bg-gray-50 dark:bg-gray-900 rounded-b-lg border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/repositories"
                className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 flex items-center justify-center"
              >
                View All
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Recent Discussions */}
          <div className="md-card">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium leading-6 text-text-light-primary dark:text-text-dark-primary flex items-center">
                  <MessageSquare className="h-5 w-5 text-primary-500 mr-2" />
                  <span>Recent Discussions</span>
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-text-light-secondary dark:text-text-dark-secondary">
                  ({discussions.length} recent)
                </p>
              </div>
              <Link
                to="/discussions/new"
                className="px-3 py-1.5 bg-primary-500 text-white rounded-md text-sm font-medium hover:bg-primary-600 flex items-center"
              >
                <Plus className="h-4 w-4 mr-1" />
                New Discussion
              </Link>
            </div>

            <div className="p-6 min-h-[200px] flex flex-col justify-center items-center">
              {discussions.length > 0 ? (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700 w-full">
                  {discussions.map((discussion) => (
                    <li key={discussion.id} className="py-4">
                      {/* Discussion display code would go here */}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center">
                  <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-text-light-primary dark:text-text-dark-primary">
                    No discussions yet
                  </h3>
                  <p className="mt-1 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                    Start a new discussion to engage with the community.
                  </p>
                </div>
              )}
            </div>

            <div className="py-3 px-6 bg-gray-50 dark:bg-gray-900 rounded-b-lg border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/discussions"
                className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 flex items-center justify-center"
              >
                View All
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
