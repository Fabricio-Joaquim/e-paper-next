import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Página não encontrada',
};

export default function NotFound() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <h1 className='mt-8 text-4xl md:text-6xl'>Página não encontrada</h1>
          <a href='/'>Voltar para a página inicial</a>
        </div>
      </section>
    </main>
  );
}
