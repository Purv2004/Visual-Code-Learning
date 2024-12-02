import React from 'react';
import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

export function Community() {
  const projects = [
    {
      id: 1,
      title: 'Simple Calculator',
      author: 'John Doe',
      description: 'A basic calculator implemented using blocks and JavaScript.',
      likes: 24,
      comments: 8,
      language: 'JavaScript',
    },
    {
      id: 2,
      title: 'Todo List App',
      author: 'Jane Smith',
      description: 'A todo list application with Python backend.',
      likes: 32,
      comments: 12,
      language: 'Python',
    },
    {
      id: 3,
      title: 'Number Guessing Game',
      author: 'Mike Johnson',
      description: 'Interactive number guessing game in Java.',
      likes: 18,
      comments: 5,
      language: 'Java',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-8">Community Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-2">by {project.author}</p>
            <span className="inline-block bg-[#4D97FF]/10 text-[#4D97FF] text-sm px-3 py-1 rounded-full mb-4">
              {project.language}
            </span>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex items-center gap-4 text-gray-500">
              <button className="flex items-center gap-1 hover:text-[#4D97FF]">
                <ThumbsUp size={16} />
                {project.likes}
              </button>
              <button className="flex items-center gap-1 hover:text-[#4D97FF]">
                <MessageSquare size={16} />
                {project.comments}
              </button>
              <button className="flex items-center gap-1 hover:text-[#4D97FF]">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}