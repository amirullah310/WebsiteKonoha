import React, { ReactNode } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CustomCursor from '../Components/CustomCursor';

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="bg-konoha-dark min-h-screen text-konoha-scroll font-sans overflow-x-hidden selection:bg-konoha-orange/30 selection:text-white">
      <CustomCursor />
      
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
