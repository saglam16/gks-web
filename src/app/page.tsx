import Image from "next/image";
import Link from "next/link";
import { getAllServices } from "@/lib/getServiceContent";

export default function Home() {
  const services = getAllServices();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="GKS Harita Mühendislik"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">GKS Harita Mühendislik</h1>
          <p className="text-xl mb-8">Profesyonel Harita ve Mühendislik Çözümleri</p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-black hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors border-2 border-white"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link 
                  href={`/hizmetler/${service.id}`} 
                  className="inline-block bg-white text-black hover:bg-gray-100 px-4 py-2 rounded border border-black"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Neden Bizi Seçmelisiniz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-4">15+</div>
              <p className="text-gray-600">Yıllık Deneyim</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-4">500+</div>
              <p className="text-gray-600">Tamamlanan Proje</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-4">100%</div>
              <p className="text-gray-600">Müşteri Memnuniyeti</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-4">24/7</div>
              <p className="text-gray-600">Teknik Destek</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
