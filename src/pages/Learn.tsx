import React, { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { BlockPalette } from '../components/BlockPalette';
import { Workspace } from '../components/Workspace';
import { CodeBlock, blocks } from '../data/blocks';

export function Learn() {
  const [workspaceBlocks, setWorkspaceBlocks] = useState<CodeBlock[]>([]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const { source, destination } = result;

    // If dropping from palette to workspace
    if (source.droppableId === 'blockPalette' && destination.droppableId === 'workspace') {
      const sourceIndex = source.index;
      const block = blocks[sourceIndex];
      const newBlock = { ...block, id: `${block.id}-${Date.now()}` }; // Create unique ID for workspace block
      setWorkspaceBlocks(prev => [...prev, newBlock]);
    }

    // If reordering within workspace
    if (source.droppableId === 'workspace' && destination.droppableId === 'workspace') {
      const items = Array.from(workspaceBlocks);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);
      setWorkspaceBlocks(items);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Code Editor</h2>
        <div className="grid grid-cols-[300px,1fr] gap-8">
          <BlockPalette />
          <Workspace blocks={workspaceBlocks} />
        </div>
      </div>
    </DragDropContext>
  );
}