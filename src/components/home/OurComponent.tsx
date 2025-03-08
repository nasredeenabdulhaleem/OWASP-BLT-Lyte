import { Database, Smartphone, Chrome, Github, Star, ArrowRight } from 'lucide-react';

export default function OurComponent(): React.JSX.Element {
  const components = [
    {
      title: 'Django Core',
      description:
        'The main platform built on Django, powering user management, bug tracking, and reward systems.',
      icon: <Database className="h-10 w-10 text-white" />,
      stars: 2347,
      link: 'https://github.com/OWASP/BLT',
      bgClass: 'bg-indigo-500',
    },
    {
      title: 'Flutter iOS App',
      description:
        'Native mobile experience for iOS and Android, allowing on-the-go bug reporting and management.',
      icon: <Smartphone className="h-10 w-10 text-white" />,
      stars: 843,
      link: 'https://github.com/OWASP/BLT-Flutter',
      bgClass: 'bg-blue-500',
    },
    {
      title: 'Chrome Extension',
      description:
        'Report bugs directly from your browser with screenshots and automatic metadata collection.',
      icon: <Chrome className="h-10 w-10 text-white" />,
      stars: 612,
      link: 'https://github.com/OWASP/BLT-Extension',
      bgClass: 'bg-green-500',
    },
    {
      title: 'GitHub Action',
      description: 'Automate security checks and vulnerability monitoring in your CI/CD pipeline.',
      icon: <Github className="h-10 w-10 text-white" />,
      stars: 956,
      link: 'https://github.com/OWASP/BLT-Action',
      bgClass: 'bg-orange-500',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
            Our Components
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary sm:text-4xl">
            Four key components power OWASP BLT
          </p>
          <p className="mt-6 text-lg leading-8 text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto">
            The core, mobile access, browser integration, and automation—working together to secure
            applications worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {components.map((component, index) => (
            <div
              key={index}
              className="md-card flex flex-col h-full transform transition-all duration-300 hover:shadow-elevation-3 hover:-translate-y-1"
            >
              <div
                className={`${component.bgClass} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
              >
                {component.icon}
              </div>

              <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                {component.title}
              </h3>

              <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6 flex-grow">
                {component.description}
              </p>

              <div className="mt-auto">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="text-text-light-secondary dark:text-text-dark-secondary font-medium">
                    {component.stars.toLocaleString()} stars
                  </span>
                </div>

                <a
                  href={component.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-link"
                >
                  View on GitHub <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
