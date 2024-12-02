import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, BookOpen, Users } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Learn to Code Visually</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Transform block-based coding into real programming languages. 
          Start with visual blocks and see the actual code in JavaScript, Python, or Java.
        </p>
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 bg-white text-[#4D97FF] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
        >
          Start Learning <ArrowRight size={20} />
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-[#4D97FF]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Code2 className="text-[#4D97FF]" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Visual to Code</h3>
          <p className="text-gray-600">
            Drag and drop blocks to create programs and see the actual code generated in real-time.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-[#4D97FF]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="text-[#4D97FF]" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Multiple Languages</h3>
          <p className="text-gray-600">
            Learn JavaScript, Python, and Java simultaneously through visual programming.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-[#4D97FF]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Users className="text-[#4D97FF]" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-gray-600">
            Share your projects, learn from others, and join a community of learners.
          </p>
        </div>
      </section>
    </div>
  );
}