import { MapPin, Phone } from 'lucide-react';

const locais = [
  {
    nome: "Instituto de Arritmias Cardíacas",
    endereco: "R. Carlos Maria Auricchio, 70, Sala 1209 - Royal Park, São José dos Campos",
    telefone: "(12) 99135-4441",
    tipo: "Apenas particular",
    mapLink: "https://www.google.com/maps/search/?api=1&query=R.+Carlos+Maria+Auricchio,+70,+Sala+1209+-+Royal+Park,+S%C3%A3o+Jos%C3%A9+dos+Campos"
  },
  {
    nome: "CentroCor",
    endereco: "Av. Dr. Ademar de Barros, 306 - Jardim Sao Dimas, São José dos Campos",
    telefone: "(12) 3923-1755",
    tipo: "Particular e convênios",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Av.+Dr.+Ademar+de+Barros,+306+-+Jardim+Sao+Dimas,+S%C3%A3o+Jos%C3%A9+dos+Campos"
  },
  {
    nome: "MEDCENTER Policlin",
    endereco: "R. Marcondes Salgado, 115 - Vila Adyana, São José dos Campos - SP, 12243-820",
    telefone: "(12) 3878-5000",
    tipo: "Particular e convênios",
    mapLink: "https://www.google.com/maps/search/?api=1&query=R.+Marcondes+Salgado,+115+-+Vila+Adyana,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12243-820"
  }
];

const LocaisAtendimento = () => {
  return (
    <section id="locais-atendimento" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">
            Locais de Atendimento
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre o local mais conveniente para sua consulta com o Dr. Thiago Barros em São José dos Campos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locais.map((local, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
              <div>
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                  {local.nome}
                </h3>
                <div className="flex items-start text-gray-700 mb-2">
                  <MapPin className="w-5 h-5 mr-2 mt-1 text-red-700 flex-shrink-0" />
                  <span>{local.endereco}</span>
                </div>
                <div className="flex items-center text-gray-700 mb-4">
                  <Phone className="w-5 h-5 mr-2 text-red-700 flex-shrink-0" />
                  <span>{local.telefone}</span>
                </div>
                <p className="text-sm text-gray-500 italic mb-4">{local.tipo}</p>
              </div>
              <a
                href={local.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Ver no Mapa
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocaisAtendimento;

