import { HeartPulse, Users, Microscope } from 'lucide-react'; // Example icons

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">
            Nossos Diferenciais: Cuidado Que Vai Além
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Entendemos que cada paciente é único. Nosso compromisso vai além do tratamento, focando em um cuidado completo, atencioso e baseado nas mais recentes evidências científicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Diferencial 1: Atenção que Acolhe */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-red-700">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-700">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
              Atenção que Acolhe
            </h3>
            <p className="text-gray-600">
              Dedicamos tempo para ouvir suas preocupações, entender seu histórico e construir uma relação de confiança. Aqui, você é verdadeiramente ouvido e compreendido.
            </p>
          </div>

          {/* Diferencial 2: Diagnóstico Preciso */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-red-700">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-700">
              <Microscope className="h-6 w-6" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
              Diagnóstico Preciso
            </h3>
            <p className="text-gray-600">
              Realizamos um exame físico completo e minucioso. Investigamos a fundo, analisamos todos os exames e buscamos uma compreensão integral da sua saúde.
            </p>
          </div>

          {/* Diferencial 3: Medicina de Ponta */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-red-700">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-700">
              <HeartPulse className="h-6 w-6" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
              Medicina de Ponta
            </h3>
            <p className="text-gray-600">
              Nosso compromisso é com o que há de mais atual e eficaz. Todas as condutas são embasadas em estudos clínicos e nas últimas diretrizes, garantindo um tratamento seguro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;

