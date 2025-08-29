import React from 'react';
import { Header } from './components/Header';
import { ImmediateForm } from './components/ImmediateForm';
import { PainPoints } from './components/PainPoints';
import { Foundation } from './components/Foundation';
import { DirectSales } from './components/DirectSales';
import { CaptationFunnels } from './components/CaptationFunnels';
import { Team } from './components/Team';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <ImmediateForm />
      <PainPoints />
      <Foundation />
      <DirectSales />
      <CaptationFunnels />
      <Team />
      
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            Copyright © 2025 Inc. Todos os direitos reservados. 2 Media.
          </p>
        </div>
      </footer>
    </div>
  );
}