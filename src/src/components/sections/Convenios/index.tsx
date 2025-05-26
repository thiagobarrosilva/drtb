import React from 'react';
// Substituindo importações de componentes UI personalizados por elementos HTML e classes Tailwind

const convenios = [
  // Convênios em destaque (alto valor de honorários)
  { 
    id: 'bradesco', 
    nome: 'Bradesco Saúde', 
    logo: '/images/convenios/bradesco-saude.png', 
    destaque: true 
  },
  { 
    id: 'sulamerica', 
    nome: 'SulAmérica', 
    logo: '/images/convenios/sulamerica-saude.png', 
    destaque: true 
  },
  { 
    id: 'mediservice', 
    nome: 'Mediservice', 
    logo: '/images/convenios/mediservice.png', 
    destaque: true 
  },
  
  // Outros convênios de alto valor
  { 
    id: 'amil', 
    nome: 'Amil', 
    logo: '/images/convenios/amil.png' 
  },
  { 
    id: 'unimed', 
    nome: 'Unimed', 
    logo: '/images/convenios/unimed.png' 
  },
  { 
    id: 'allianz', 
    nome: 'Allianz Saúde', 
    logo: '/images/convenios/allianz.png' 
  },
  { 
    id: 'goldencross', 
    nome: 'Golden Cross', 
    logo: '/images/convenios/goldencross.png' 
  },
  { 
    id: 'careplus', 
    nome: 'Care Plus', 
    logo: '/images/convenios/careplus.png' 
  },
  { 
    id: 'notredame', 
    nome: 'NotreDame Intermédica', 
    logo: '/images/convenios/notredame.png' 
  },
  { 
    id: 'omint', 
    nome: 'Omint', 
    logo: '/images/convenios/omint.png' 
  },
  { 
    id: 'portoseguro', 
    nome: 'Porto Seguro Saúde', 
    logo: '/images/convenios/porto-saude.png' 
  }
];

export function Convenios() {
  const conveniosDestaque = convenios.filter(convenio => convenio.destaque);
  const outrosConvenios = convenios.filter(convenio => !convenio.destaque);

  return (
    <section id="convenios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Convênios Aceitos
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-red-600 rounded"></div>
        </div>

        {/* Convênios em destaque */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {conveniosDestaque.map((convenio) => (
              <div key={convenio.id} className="h-full">
                <div className="h-full flex flex-col items-center justify-center p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-center mb-4 h-[120px]">
                    <img 
                      src={convenio.logo} 
                      alt={`Logo ${convenio.nome}`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h5 className="text-xl font-medium text-center text-gray-800">
                    {convenio.nome}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outros convênios */}
        <h4 className="text-2xl font-semibold text-center mb-8 text-gray-700">
          Outros Convênios Aceitos
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
          {outrosConvenios.map((convenio) => (
            <div key={convenio.id} className="h-full">
              <div className="h-full flex flex-col items-center justify-center p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex items-center justify-center mb-3 h-[80px]">
                  <img 
                    src={convenio.logo} 
                    alt={`Logo ${convenio.nome}`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-base font-medium text-center text-gray-700">
                  {convenio.nome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Convenios;
