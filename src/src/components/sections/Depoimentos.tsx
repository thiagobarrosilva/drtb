import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Depoimentos = () => {
  const depoimentos = [
    {
      id: 1,
      nome: "Maria S.",
      tipo: "Paciente",
      texto: "Nunca fui tão bem atendida por um médico. Dr. Thiago ouve com atenção, explica tudo com calma e investiga a fundo. Sinto-me segura e cuidada.",
      imagem: "/images/depoimento_idosa.png"
    },
    {
      id: 2,
      nome: "João P.",
      tipo: "Filho de Paciente",
      texto: "Levei minha mãe no Dr. Thiago e ficamos encantados. Ele é extremamente atencioso e competente. Minha mãe está muito melhor e mais confiante.",
      imagem: "/images/depoimento_homem.png"
    },
    {
      id: 3,
      nome: "Ana L.",
      tipo: "Paciente",
      texto: "Depois de passar por vários cardiologistas, encontrei o Dr. Thiago. Ele não só cuidou do meu coração, mas olhou para minha saúde como um todo. Recomendo de olhos fechados!",
      imagem: "/images/depoimento_mulher.png"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          O que Nossos Pacientes Dizem
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          A confiança e a satisfação dos nossos pacientes são nossa maior recompensa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento) => (
            <Card key={depoimento.id} className="border-red-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-200">
                    <Image
                      src={depoimento.imagem}
                      alt={depoimento.nome}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">{depoimento.nome}</CardTitle>
                    <CardDescription className="text-gray-600">{depoimento.tipo}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{depoimento.texto}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
