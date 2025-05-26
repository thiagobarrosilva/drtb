import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ParaMedicos = () => {
  return (
    <section id="para-medicos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Para Médicos
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Área dedicada aos profissionais de saúde. Confira os próximos cursos, palestras e eventos, e inscreva-se para receber atualizações e reservar sua vaga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Cursos e Palestras */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4">
              Próximos Cursos e Palestras
            </h3>
            
            <Card className="border-red-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Atualização em Arritmias Cardíacas</CardTitle>
                <CardDescription className="text-gray-600">
                  Data: 15 de Junho de 2025 | Local: CentroCor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Curso prático sobre diagnóstico e tratamento das principais arritmias cardíacas, com discussão de casos clínicos e novas diretrizes.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-red-700 hover:bg-red-800 text-white">
                  Inscreva-se
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-red-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Simpósio de Cardiologia Intervencionista</CardTitle>
                <CardDescription className="text-gray-600">
                  Data: 28 de Julho de 2025 | Local: Instituto de Arritmias Cardíacas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Discussão sobre avanços recentes em procedimentos intervencionistas, com foco em técnicas minimamente invasivas e resultados clínicos.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-red-700 hover:bg-red-800 text-white">
                  Inscreva-se
                </Button>
              </CardFooter>
            </Card>
            
            <p className="text-gray-600 italic">
              * Os eventos listados são exemplos. O calendário será atualizado regularmente com novos cursos e palestras.
            </p>
          </div>
          
          {/* Formulário de Inscrição */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cadastre-se para Receber Atualizações
            </h3>
            
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <Input id="name" placeholder="Seu nome" className="border-gray-300" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail Profissional</label>
                  <Input id="email" type="email" placeholder="seuemail@exemplo.com" className="border-gray-300" />
                </div>
                
                <div>
                  <label htmlFor="crm" className="block text-sm font-medium text-gray-700 mb-1">CRM</label>
                  <Input id="crm" placeholder="CRM/UF" className="border-gray-300" />
                </div>
                
                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">Especialidade</label>
                  <Input id="specialty" placeholder="Sua especialidade médica" className="border-gray-300" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <Input id="phone" placeholder="(XX) XXXXX-XXXX" className="border-gray-300" />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interesses</label>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-courses" />
                    <label htmlFor="interest-courses" className="text-sm text-gray-600">Cursos e Workshops</label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-lectures" />
                    <label htmlFor="interest-lectures" className="text-sm text-gray-600">Palestras e Simpósios</label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-research" />
                    <label htmlFor="interest-research" className="text-sm text-gray-600">Pesquisa e Publicações</label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-cases" />
                    <label htmlFor="interest-cases" className="text-sm text-gray-600">Discussão de Casos Clínicos</label>
                  </div>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white px-6 py-3 text-base font-medium transition-colors shadow-lg"
              >
                Cadastrar
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Ao se cadastrar, você concorda em receber comunicações sobre eventos médicos e atualizações profissionais. Seus dados serão tratados com confidencialidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaMedicos;
