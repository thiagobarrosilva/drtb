// Removendo importação do componente InputOTP que está causando erro
// Este arquivo foi modificado para remover dependências problemáticas

import React from 'react';

// Componente simplificado que não usa input-otp
const InputOTP = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <p>Entrada OTP temporariamente indisponível</p>
    </div>
  );
};

const InputOTPGroup = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const InputOTPSlot = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const InputOTPSeparator = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
};
