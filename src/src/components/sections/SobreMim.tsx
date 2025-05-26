import Image from 'next/image';

const SobreMim = () => {
  return (
    <section id="sobre-mim" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Imagem com efeito de fade out na parte inferior */}
          <div className="w-full md:w-1/3 relative">
            <div className="relative h-[500px] w-full">
              <div 
                className="absolute inset-0 z-10"
                style={{
                  background: 'linear-gradient(to bottom, rgba(243, 244, 246, 0) 50%, rgba(243, 244, 246, 0.7) 80%, rgba(243, 244, 246, 1) 100%)',
                }}
              />
              <Image
                src="/images/IMG_9933.png"
                alt="Dr. Thiago Barros"
                fill
                style={{ 
                  objectFit: 'contain',
                  objectPosition: 'center top',
                }}
                priority
              />
            </div>
          </div>
          
          {/* Conteúdo de texto */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-l-4 border-red-600 pl-4">
              Conheça o Dr. Thiago Barros
            </h2>
            <p className="text-gray-700 text-lg">
              Com uma trajetória dedicada à excelência em cardiologia e ao cuidado humanizado, o Dr. Thiago Barros é um profissional que se destaca pela atenção integral aos seus pacientes. Sua filosofia de trabalho é pautada na escuta atenta, no exame clínico minucioso – aquele que vai além do superficial, que de fato "encosta no paciente" – e na busca incessante pelas melhores e mais atuais soluções terapêuticas.
            </p>
            <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-600">
              "Eu não estou aqui para ser apenas mais um médico na vida do paciente, mas sim para entender, pesquisar e fazer tudo da melhor forma possível. Eu me importo de verdade com cada pessoa que confia a mim sua saúde."
            </blockquote>
            <p className="text-gray-700 text-lg">
              Formado pela UFRJ, com residências em Clínica Médica, Cardiologia e Eletrofisiologia (Arritmologia), e Mestrado em Educação em Saúde, Dr. Thiago possui vasta experiência hospitalar e acadêmica, sendo coordenador de residências e staff em hospitais renomados. Seu compromisso é oferecer um atendimento que une rigor científico com uma abordagem empática e individualizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
