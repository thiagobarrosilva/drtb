import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orientações para Pacientes | Dr. Thiago Barros',
  description: 'Informações importantes sobre saúde cardiovascular para pacientes do Dr. Thiago Barros, cardiologista em São José dos Campos.',
};

export default function OrientacoesPage() {
  const orientacoes = [
    { id: "hipertensao", title: "Hipertensão Arterial Sistêmica (Pressão Alta)", content: "Entenda o que é a hipertensão, seus riscos, como prevenir e a importância do acompanhamento médico para controle e tratamento." },
    { id: "insuficiencia", title: "Insuficiência Cardíaca (Coração Fraco)", content: "Saiba mais sobre a insuficiência cardíaca, seus sintomas, causas e como o tratamento adequado pode melhorar sua qualidade de vida." },
    { id: "diabetes", title: "Diabetes e Saúde Cardiovascular", content: "Compreenda a relação entre diabetes e doenças cardíacas, fatores de risco compartilhados e como o controle adequado do diabetes protege seu coração." },
    { id: "dislipidemias", title: "Dislipidemias (Colesterol e Triglicerídeos Altos)", content: "Entenda os riscos do colesterol e triglicerídeos elevados e como controlar esses níveis através de dieta, exercícios e medicação." },
    { id: "risco-cirurgico", title: "Avaliação de Risco Cirúrgico", content: "Saiba como é feita a avaliação cardiológica pré-operatória, sua importância para procedimentos cirúrgicos e como se preparar adequadamente." },
    { id: "arritmias", title: "Arritmias Cardíacas: Quando o Coração Perde o Ritmo", content: "As arritmias podem ser benignas ou graves. Conheça os tipos mais comuns e a importância de um diagnóstico preciso." },
    { id: "checkup", title: "Checkup Cardiológico: Prevenção em Primeiro Lugar", content: "Descubra a importância do checkup cardiológico periódico, quais exames são realizados e com que frequência deve ser feito conforme sua idade e fatores de risco." },
    { id: "infarto", title: "Infarto Agudo do Miocárdio (Ataque Cardíaco)", content: "Reconheça os sinais de um infarto e a importância do tratamento urgente para salvar vidas e minimizar sequelas." },
    { id: "angina", title: "Angina: Dor no Peito e Alerta Cardíaco", content: "Entenda o que é angina, como se manifesta, seus diferentes tipos e quando procurar atendimento médico imediato." },
    { id: "orientacoes-alimentares", title: "Orientações Alimentares para Saúde do Coração", content: "Conheça os princípios da alimentação cardioprotetora, alimentos recomendados e aqueles que devem ser evitados para manter seu coração saudável." },
    { id: "parar-de-fumar", title: "Como Parar de Fumar: Benefícios para o Coração", content: "Descubra os impactos do tabagismo na saúde cardiovascular, os benefícios imediatos ao parar de fumar e estratégias eficazes para abandonar o cigarro." },
    { id: "liberacao-academia", title: "Liberação para Atividade Física e Academia", content: "Entenda quando é necessária avaliação cardiológica antes de iniciar exercícios físicos, quais exames podem ser solicitados e como exercitar-se com segurança." },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-red-700 hover:text-red-800 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Orientações para Pacientes
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Informações importantes sobre sua saúde cardiovascular. Lembramos que este conteúdo é educativo e não substitui uma consulta médica. Para um diagnóstico preciso e plano de tratamento individualizado, agende sua avaliação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orientacoes.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h2 className="font-playfair text-xl font-bold text-gray-800 mb-3">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  <Link href={`/orientacoes/${item.id}`}>
                    <Button className="bg-red-700 hover:bg-red-800 text-white">
                      Leia mais
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/#contato">
              <Button
                size="lg"
                className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 text-lg font-medium transition-colors shadow-lg"
              >
                Agende sua Consulta para Mais Informações
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
