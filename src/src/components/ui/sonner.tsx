// Removendo importação do componente Sonner que está causando erro
// Este arquivo foi modificado para remover dependências problemáticas

import React from 'react';
import { useTheme } from "next-themes";

// Componente simplificado que não usa sonner
const Toaster = ({ className }: { className?: string }) => {
  const { theme } = useTheme();
  
  return (
    <div className={className} data-theme={theme}>
      {/* Placeholder para o componente Toaster */}
    </div>
  );
};

export { Toaster };
