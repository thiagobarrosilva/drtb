import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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

const OrientacoesPacientes = () => {
  return (
    <section id="orientacoes" className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">
            Orientações para Pacientes
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Informações importantes sobre sua saúde cardiovascular. Lembramos que este conteúdo é educativo e não substitui uma consulta médica. Para um diagnóstico preciso e plano de tratamento individualizado, agende sua avaliação.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {orientacoes.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger className="font-playfair text-lg text-gray-800 hover:text-red-700">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-2 pb-4 px-2">
                {item.content}
                <Button variant="link" className="text-red-700 hover:text-red-800 p-0 h-auto mt-2" asChild>
                  <a href={`/orientacoes/${item.id}`}>Leia mais</a>
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
           <Button
              variant="default"
              size="lg"
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 text-lg font-medium transition-colors shadow-lg"
            >
              Agende sua Consulta para Mais Informações
            </Button>
        </div>
      </div>
    </section>
  );
};

export default OrientacoesPacientes;

