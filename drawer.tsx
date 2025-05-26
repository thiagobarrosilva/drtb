// Removendo importação do componente Drawer que está causando erro
// Este arquivo foi modificado para remover dependências problemáticas

import React from 'react';

// Componente simplificado que não usa vaul
const Drawer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="drawer-placeholder">
      {children}
    </div>
  );
};

const DrawerTrigger = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="drawer-trigger-placeholder">
      {children}
    </div>
  );
};

const DrawerContent = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="drawer-content-placeholder">
      {children}
    </div>
  );
};

const DrawerHeader = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="drawer-header-placeholder">
      {children}
    </div>
  );
};

const DrawerFooter = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="drawer-footer-placeholder">
      {children}
    </div>
  );
};

const DrawerTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="drawer-title-placeholder">
      {children}
    </div>
  );
};

const DrawerDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="drawer-description-placeholder">
      {children}
    </div>
  );
};

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription
};
