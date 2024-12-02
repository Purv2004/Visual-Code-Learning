import React from 'react';
import { Code2 } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 text-white">
      <div className="flex items-center gap-2 mb-2 text-gray-400">
        <Code2 size={16} />
        <span className="text-sm font-mono">{language}</span>
      </div>
      <pre className="font-mono text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}