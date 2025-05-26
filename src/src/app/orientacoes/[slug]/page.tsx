import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  
  const titles: Record<string, string> = {
    "hipertensao": "Hipertensão Arterial Sistêmica (Pressão Alta)",
    "insuficiencia": "Insuficiência Cardíaca (Coração Fraco)",
    "diabetes": "Diabetes e Saúde Cardiovascular",
    "dislipidemias": "Dislipidemias (Colesterol e Triglicerídeos Altos)",
    "risco-cirurgico": "Avaliação de Risco Cirúrgico",
    "arritmias": "Arritmias Cardíacas: Quando o Coração Perde o Ritmo",
    "checkup": "Checkup Cardiológico: Prevenção em Primeiro Lugar",
    "infarto": "Infarto Agudo do Miocárdio (Ataque Cardíaco)",
    "angina": "Angina: Dor no Peito e Alerta Cardíaco",
    "orientacoes-alimentares": "Orientações Alimentares para Saúde do Coração",
    "parar-de-fumar": "Como Parar de Fumar: Benefícios para o Coração",
    "liberacao-academia": "Liberação para Atividade Física e Academia",
  };

  return {
    title: `${titles[slug] || 'Orientação'} | Dr. Thiago Barros - Cardiologista`,
    description: `Informações sobre ${titles[slug] || 'saúde cardiovascular'} pelo Dr. Thiago Barros, cardiologista em São José dos Campos.`,
  };
}

export default async function OrientacaoPage({ params }: PageProps) {
  const { slug } = params;
  
  let content = '';
  
  try {
    // Usar conteúdo estático em vez de processamento de markdown
    const filePath = path.join(process.cwd(), 'public/content', `${slug}.md`);
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    notFound();
  }

  // Dividir o conteúdo em seções baseadas nos títulos
  const lines = content.split('\n');
  const title = lines[0].replace('# ', '');
  
  // Remover o título principal do conteúdo
  const contentWithoutTitle = lines.slice(1).join('\n');
  
  // Dividir o conteúdo em seções baseadas em títulos de segundo nível
  const sections = contentWithoutTitle.split(/^## /m).filter(Boolean);

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/orientacoes" className="inline-flex items-center text-red-700 hover:text-red-800 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para todas as orientações
            </Link>
          </div>
          
          <article className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              {title}
            </h1>
            
            {sections.map((section, index) => {
              const sectionLines = section.split('\n');
              const sectionTitle = sectionLines[0];
              const sectionContent = sectionLines.slice(1).join('\n');
              
              return (
                <div key={index} className="mb-10">
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {sectionTitle}
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    {sectionContent.split('\n\n').map((paragraph, pIndex) => {
                      // Verificar se é uma lista
                      if (paragraph.trim().startsWith('- ')) {
                        const items = paragraph.split('- ').filter(Boolean);
                        return (
                          <ul key={`list-${pIndex}`} className="list-disc pl-6 mb-4">
                            {items.map((item, iIndex) => (
                              <li key={`item-${iIndex}`} className="mb-1">{item.trim()}</li>
                            ))}
                          </ul>
                        );
                      }
                      
                      // Verificar se é um subtítulo (h3)
                      if (paragraph.trim().startsWith('### ')) {
                        return (
                          <h3 key={`h3-${pIndex}`} className="font-playfair text-xl font-bold text-gray-800 mt-6 mb-3">
                            {paragraph.replace('### ', '')}
                          </h3>
                        );
                      }
                      
                      // Parágrafo normal
                      return (
                        <p key={`p-${pIndex}`} className="mb-4">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            
            <div className="mt-12 pt-8 border-t border-gray-200 text-gray-600 italic">
              <p>Lembre-se: Este conteúdo é informativo e não substitui uma consulta médica. Para diagnóstico preciso e tratamento individualizado, agende sua consulta com o Dr. Thiago Barros.</p>
            </div>
          </article>

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
