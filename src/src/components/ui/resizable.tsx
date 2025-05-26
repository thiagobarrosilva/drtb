// Removendo importação do componente Resizable que está causando erro
// Este arquivo foi modificado para remover dependências problemáticas

import React from 'react';

// Componente simplificado que não usa react-resizable-panels
const ResizablePanel = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const ResizablePanelGroup = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const ResizableHandle = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
  return (
    <div className={className}>
      {children || <div className="h-4 w-1 bg-gray-300"></div>}
    </div>
  );
};

export {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle
};
