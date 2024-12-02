export interface CodeBlock {
  id: string;
  label: string;
  type: 'control' | 'logic' | 'variable' | 'function' | 'output';
  template: {
    javascript: string;
    python: string;
    java: string;
  };
}

export const blocks: CodeBlock[] = [
  {
    id: 'if',
    label: 'If Statement',
    type: 'control',
    template: {
      javascript: 'if (condition) {\n  // code\n}',
      python: 'if condition:\n    # code',
      java: 'if (condition) {\n    // code\n}'
    }
  },
  {
    id: 'loop',
    label: 'For Loop',
    type: 'control',
    template: {
      javascript: 'for (let i = 0; i < n; i++) {\n  // code\n}',
      python: 'for i in range(n):\n    # code',
      java: 'for (int i = 0; i < n; i++) {\n    // code\n}'
    }
  },
  {
    id: 'while',
    label: 'While Loop',
    type: 'control',
    template: {
      javascript: 'while (condition) {\n  // code\n}',
      python: 'while condition:\n    # code',
      java: 'while (condition) {\n    // code\n}'
    }
  },
  {
    id: 'variable',
    label: 'Create Variable',
    type: 'variable',
    template: {
      javascript: 'let variable = value;',
      python: 'variable = value',
      java: 'int variable = value;'
    }
  },
  {
    id: 'function',
    label: 'Create Function',
    type: 'function',
    template: {
      javascript: 'function name() {\n  // code\n}',
      python: 'def name():\n    # code',
      java: 'void name() {\n    // code\n}'
    }
  },
  {
    id: 'print',
    label: 'Print Output',
    type: 'output',
    template: {
      javascript: 'console.log(message);',
      python: 'print(message)',
      java: 'System.out.println(message);'
    }
  },
  {
    id: 'array',
    label: 'Create Array',
    type: 'variable',
    template: {
      javascript: 'let array = [];',
      python: 'array = []',
      java: 'int[] array = new int[size];'
    }
  },
  {
    id: 'condition',
    label: 'Condition',
    type: 'logic',
    template: {
      javascript: 'a === b',
      python: 'a == b',
      java: 'a == b'
    }
  }
];