"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-gray-900/80 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-white hover:text-red-400 transition-colors">
            Dr. Thiago Barros
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="#sobre-mim" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Sobre Mim
            </Link>
            <Link href="#diferenciais" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Diferenciais
            </Link>
            <Link href="#orientacoes" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Orientações
            </Link>
            <Link href="#locais-atendimento" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Locais de Atendimento
            </Link>
            <Link href="#depoimentos" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Depoimentos
            </Link>
            <Link href="#para-medicos" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Para Médicos
            </Link>
            <Link href="#contato" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Contato
            </Link>
            <Button className="ml-4 bg-red-700 hover:bg-red-800 text-white">
              Agende sua Consulta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <Link href="#sobre-mim" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Sobre Mim
            </Link>
            <Link href="#diferenciais" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Diferenciais
            </Link>
            <Link href="#orientacoes" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Orientações
            </Link>
            <Link href="#locais-atendimento" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Locais de Atendimento
            </Link>
            <Link href="#depoimentos" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Depoimentos
            </Link>
            <Link href="#para-medicos" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Para Médicos
            </Link>
            <Link href="#contato" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
              Contato
            </Link>
            <Button className="w-full mt-2 bg-red-700 hover:bg-red-800 text-white">
              Agende sua Consulta
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
