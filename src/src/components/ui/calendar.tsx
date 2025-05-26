// Removendo importação do componente Calendar que está causando erro
// Este arquivo foi modificado para remover dependências problemáticas

import React from 'react';

// Componente simplificado que não usa react-day-picker
const Calendar = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <p>Calendário temporariamente indisponível</p>
    </div>
  );
};

export { Calendar };
