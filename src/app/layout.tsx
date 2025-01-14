'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GKS Harita Mühendislik",
  description: "Profesyonel Harita Mühendislik Hizmetleri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="tr">
      <body className={inter.className}>
        <nav className="bg-black text-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl md:text-2xl font-bold hover:text-gray-300 transition-colors">
                GKS Harita Mühendislik
              </Link>
              
              {/* Mobil Menü */}
              <div className="md:hidden">
                <button
                  className="mobile-menu-button p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Masaüstü Menü */}
              <div className="hidden md:flex space-x-4">
                <Link href="/" className="px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all">
                  Ana Sayfa
                </Link>
                <Link href="/hizmetler" className="px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all">
                  Hizmetlerimiz
                </Link>
                <Link href="/hakkimizda" className="px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all">
                  Hakkımızda
                </Link>
                <Link href="/iletisim" className="px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all">
                  İletişim
                </Link>
              </div>
            </div>

            {/* Mobil Menü İçeriği */}
            <div 
              className={`${
                isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } md:hidden mt-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <Link 
                href="/" 
                className="block px-4 py-3 rounded-lg border border-white hover:bg-white hover:text-black transition-all text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/hizmetler" 
                className="block px-4 py-3 rounded-lg border border-white hover:bg-white hover:text-black transition-all text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hizmetlerimiz
              </Link>
              <Link 
                href="/hakkimizda" 
                className="block px-4 py-3 rounded-lg border border-white hover:bg-white hover:text-black transition-all text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link 
                href="/iletisim" 
                className="block px-4 py-3 rounded-lg border border-white hover:bg-white hover:text-black transition-all text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-black text-white mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">İletişim</h3>
                <p>Adres: Balkan Mah. Lalezar Sok. No:10/9</p>
                <p>Nilüfer/Bursa</p>
                <p>Tel: (0539) 221 76 81</p>
                <p>E-posta: saglam16@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Çalışma Saatleri</h3>
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                <p>Cumartesi: 09:00 - 14:00</p>
                <p>Pazar: Kapalı</p>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-gray-800">
              <p>&copy; 2024 GKS Harita Mühendislik. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
