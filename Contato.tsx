import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Contato = () => {
  return (
    <section id="contato" className="bg-gray-900 text-gray-200 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6 border-l-4 border-red-700 pl-4">
              Entre em Contato
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Tem alguma dúvida ou gostaria de agendar sua consulta? Utilize o formulário ao lado ou entre em contato através dos nossos canais.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-white mb-3">Informações de Contato</h3>
            {/* Add specific contact details here, maybe iterate through the locations array? */}
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-red-500" />
              <span className="text-gray-300">(12) 99135-4441 (Instituto) / (12) 3923-1755 (CentroCor) / (12) 3878-5000 (Policlin)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-red-500" />
              {/* Add Dr. Thiago's professional email if available */}
              <span className="text-gray-300">contato@drthiagobarros.com.br (Exemplo)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Instagram className="w-5 h-5 text-red-500" />
              <a href="https://www.instagram.com/drthiagobarros" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-400 transition-colors">
                @drthiagobarros
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Atendimento em São José dos Campos - Veja os endereços na seção "Locais de Atendimento".</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome Completo</label>
              <Input id="name" placeholder="Seu nome" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
              <Input id="email" type="email" placeholder="seuemail@exemplo.com" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Telefone (Opcional)</label>
              <Input id="phone" placeholder="(XX) XXXXX-XXXX" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
              <Textarea id="message" placeholder="Digite sua mensagem aqui..." rows={5} className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
            </div>
            <Button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white px-6 py-3 text-base font-medium transition-colors shadow-lg"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
