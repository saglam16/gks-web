import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

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
        <Navigation />
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
