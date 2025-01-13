import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
  return (
    <html lang="tr">
      <body className={inter.className}>
        <nav className="bg-black text-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
                GKS Harita Mühendislik
              </Link>
              <div className="space-x-4">
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
