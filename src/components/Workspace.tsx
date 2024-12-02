import React, { useState } from 'react';
import { Play, Trash2 } from 'lucide-react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { CodeBlock } from '../data/blocks';

interface WorkspaceProps {
  blocks: CodeBlock[];
}

export function Workspace({ blocks }: WorkspaceProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [customCode, setCustomCode] = useState('');
  const [output, setOutput] = useState('');

  // Update code whenever blocks change
  React.useEffect(() => {
    const code = blocks
      .map(
        (block) =>
          block.template[selectedLanguage as keyof typeof block.template]
      )
      .join('\n');
    setCustomCode(code);
  }, [blocks, selectedLanguage]);

  const executeCode = () => {
    try {
      let result;
      if (selectedLanguage === 'javascript') {
        // Create a safe evaluation context
        const context = {
          console: {
            log: (message: any) => {
              setOutput((prev) => prev + message + '\n');
            },
          },
        };

        const evaluator = new Function(
          'context',
          `
          with (context) {
            ${customCode}
          }
        `
        );

        setOutput('');
        evaluator(context);
      } else {
        setOutput(
          'Code execution is simulated for ' +
            selectedLanguage +
            ':\n\n' +
            customCode
        );
      }
    } catch (error) {
      setOutput('Error: ' + (error as Error).message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-gray-100 rounded px-3 py-1"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="C">C</option>
          </select>
        </div>
        <button
          onClick={executeCode}
          className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
        >
          <Play size={16} />
          
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Droppable droppableId="workspace">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="min-h-[400px] border-2 border-dashed border-gray-300 rounded-lg p-4 space-y-2"
            >
              {blocks.map((block, index) => (
                <Draggable
                  key={`workspace-${block.id}-${index}`}
                  draggableId={`workspace-${block.id}-${index}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`p-3 rounded cursor-move transition-colors ${
                        block.type === 'control'
                          ? 'bg-blue-500 hover:bg-blue-600'
                          : block.type === 'logic'
                          ? 'bg-purple-500 hover:bg-purple-600'
                          : block.type === 'variable'
                          ? 'bg-green-500 hover:bg-green-600'
                          : block.type === 'function'
                          ? 'bg-orange-500 hover:bg-orange-600'
                          : 'bg-red-500 hover:bg-red-600'
                      } text-white`}
                    >
                      {block.label}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div className="space-y-4">
          <textarea
            value={customCode}
            onChange={(e) => setCustomCode(e.target.value)}
            className="w-full h-[200px] font-mono text-sm p-4 bg-gray-800 text-white rounded-lg resize-none"
            placeholder="// You can type your code here or drag blocks from the left"
          />
          <div className="bg-gray-100 rounded-lg p-4 h-[180px] overflow-auto">
            <h3 className="text-sm font-semibold mb-2">Output:</h3>
            <pre className="font-mono text-sm whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
