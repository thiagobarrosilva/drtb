import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orientações para Pacientes | Dr. Thiago Barros - Cardiologista',
  description: 'Informações importantes sobre saúde cardiovascular para pacientes do Dr. Thiago Barros, cardiologista em São José dos Campos.',
};

export default function OrientacoesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      {children}
    </div>
  );
}
