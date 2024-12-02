import React from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { blocks } from '../data/blocks';

export function BlockPalette() {
  const categories = {
    control: 'Control Flow',
    logic: 'Logic',
    variable: 'Variables',
    function: 'Functions',
    output: 'Output'
  };

  const groupedBlocks = blocks.reduce((acc, block) => {
    if (!acc[block.type]) {
      acc[block.type] = [];
    }
    acc[block.type].push(block);
    return acc;
  }, {} as Record<string, typeof blocks>);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Blocks</h2>
      <Droppable droppableId="blockPalette" isDropDisabled={true}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-6"
          >
            {Object.entries(groupedBlocks).map(([type, blocks]) => (
              <div key={type}>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  {categories[type as keyof typeof categories]}
                </h3>
                <div className="space-y-2">
                  {blocks.map((block, index) => (
                    <Draggable 
                      key={block.id} 
                      draggableId={block.id} 
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`p-3 rounded cursor-move transition-colors ${
                            type === 'control' ? 'bg-blue-500 hover:bg-blue-600' :
                            type === 'logic' ? 'bg-purple-500 hover:bg-purple-600' :
                            type === 'variable' ? 'bg-green-500 hover:bg-green-600' :
                            type === 'function' ? 'bg-orange-500 hover:bg-orange-600' :
                            'bg-red-500 hover:bg-red-600'
                          } text-white`}
                        >
                          {block.label}
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}