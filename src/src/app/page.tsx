// /home/ubuntu/dr-thiago-barros-site/src/app/page.tsx
import Hero from "@/components/sections/Hero";
import SobreMim from "@/components/sections/SobreMim";
import Diferenciais from "@/components/sections/Diferenciais";
import LocaisAtendimento from "@/components/sections/LocaisAtendimento";
import Depoimentos from "@/components/sections/Depoimentos";
import OrientacoesPacientes from "@/components/sections/OrientacoesPacientes";
import ParaMedicos from "@/components/sections/ParaMedicos";
import Contato from "@/components/sections/Contato";
import Convenios from "@/components/sections/Convenios";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SobreMim />
        <Diferenciais />
        <OrientacoesPacientes />
        <LocaisAtendimento />
        <Depoimentos />
        <ParaMedicos />
        <Convenios />
        <Contato />
      </main>
    </>
  );
}
