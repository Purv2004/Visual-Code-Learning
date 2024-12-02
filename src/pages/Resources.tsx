import React from 'react';
import { Book, Video, FileText } from 'lucide-react';

export function Resources() {
  const resources = [
    {
      title: 'Programming Basics',
      description: 'Learn the fundamentals of programming concepts.',
      icon: Book,
      links: [
        { title: 'Variables and Data Types', url: '#' },
        { title: 'Control Flow', url: '#' },
        { title: 'Functions and Methods', url: '#' },
      ],
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step tutorials on various programming topics.',
      icon: Video,
      links: [
        { title: 'Getting Started with JavaScript', url: '#' },
        { title: 'Python for Beginners', url: '#' },
        { title: 'Java Fundamentals', url: '#' },
      ],
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and documentation for each language.',
      icon: FileText,
      links: [
        { title: 'JavaScript Guide', url: '#' },
        { title: 'Python Documentation', url: '#' },
        { title: 'Java Tutorial', url: '#' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-8">Learning Resources</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <div key={resource.title} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-[#4D97FF]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon className="text-[#4D97FF]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <ul className="space-y-2">
                {resource.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.url}
                      className="text-[#4D97FF] hover:underline"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}