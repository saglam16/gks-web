import Image from "next/image";
import { Metadata } from "next";
import Markdown from "react-markdown";
import { getServiceContent } from "@/lib/getServiceContent";

export const metadata: Metadata = {
  title: "İmar Uygulamaları - GKS Harita Mühendislik",
  description: "Profesyonel imar uygulamaları ve arsa düzenleme hizmetleri",
};

export default function ImarPage() {
  const content = getServiceContent('imar');

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Bölümü */}
        <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
          <Image
            src="/imar.jpg"
            alt="İmar Uygulamaları"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white text-center max-w-3xl px-4">
              <p className="text-xl mb-4">
                Profesyonel İmar Uygulamaları ve Arsa Düzenleme Hizmetleri
              </p>
            </div>
          </div>
        </div>

        {/* Markdown İçerik */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <Markdown>{content}</Markdown>
          </div>

          {/* İletişim CTA */}
          <div className="text-center mt-12">
            <p className="text-lg mb-4">
              İmar uygulamaları hakkında detaylı bilgi ve fiyat teklifi için bize ulaşın.
            </p>
            <div className="space-x-4">
              <a
                href="/iletisim"
                className="inline-block bg-white text-black hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg border border-black transition-colors"
              >
                İletişime Geçin
              </a>
              <a
                href="tel:+905392217681"
                className="inline-block bg-black text-white hover:bg-black/90 px-6 py-3 rounded-lg"
              >
                Hemen Arayın
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 