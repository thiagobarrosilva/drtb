import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-6 relative z-10">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Cardiologia de Excelência,
            <br />
            <span className="text-red-500">Cuidado Humanizado.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-[600px]">
            Compromisso com sua saúde cardiovascular, aliando conhecimento de ponta, tecnologia avançada e um atendimento que realmente escuta e compreende você em São José dos Campos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 text-lg font-medium transition-colors shadow-lg"
              // Add link/action for scheduling
            >
              Agende sua Consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-3 text-lg font-medium transition-colors"
              // Optional: Link to 'Sobre Mim' or other section
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Image Content - Using PNG without background - Larger size, focused on upper body */}
        <div className="hidden md:flex justify-center items-center h-full relative">
          <div className="w-[120%] h-[120%] relative">
            <Image
              src="/images/IMG_9933.png" // Using the arms crossed photo without background
              alt="Dr. Thiago Barros - Cardiologista"
              fill
              style={{ 
                objectFit: 'cover', 
                objectPosition: 'center top',
                transform: 'scale(1.5)' // Make image 50% larger
              }}
              priority // Load image faster
            />
          </div>
        </div>
      </div>
      {/* Optional: Add subtle background elements or shapes */}
    </section>
  );
};

export default Hero;
