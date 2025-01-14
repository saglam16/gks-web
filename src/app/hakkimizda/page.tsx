import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Hakkımızda</h1>

          {/* Şirket Tanıtımı */}
          <div className="mb-12">
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="/about.jpg"
                alt="GKS Harita Mühendislik Ofisi"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 mb-6">
              2020 yılından bu yana harita mühendisliği alanında faaliyet gösteren GKS Harita Mühendislik,
              profesyonel kadrosu ve modern teknolojik altyapısı ile müşterilerimize en kaliteli
              hizmeti sunmayı hedeflemektedir.
            </p>
            <p className="text-lg text-gray-700 mb-6">  
              GKS Harita Mühendislik kurucusu Gökhan Sağlam 2013 yılında Selçuk Üniversitesinden mezun oldu. 2020 yılına kadar Burken A.Ş. de planlama
              sorumlusu olarak görev yapmıştır. 2020 yılından bu yana GKS Harita da mühendislik hizmetleri vermektedir.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Kadastro ölçümlerinden imar uygulamalarına, CBS hizmetlerinden plankote
              çalışmalarına kadar geniş bir yelpazede hizmet vermekteyiz. Her projede en son
              teknolojileri kullanarak, müşterilerimizin ihtiyaçlarına özel çözümler üretiyoruz.
            </p>
          </div>

          {/* Misyon & Vizyon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Misyonumuz</h2>
              <p className="text-gray-700">
                Harita mühendisliği alanında yenilikçi ve sürdürülebilir çözümler üreterek,
                müşterilerimizin projelerini en yüksek kalite standartlarında gerçekleştirmek
                ve sektörde öncü olmak.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Vizyonumuz</h2>
              <p className="text-gray-700">
                Türkiye&apos;nin önde gelen harita mühendislik firmaları arasında yer alarak,
                teknolojik gelişmeleri yakından takip eden ve müşteri memnuniyetini ön
                planda tutan bir firma olmak.
              </p>
            </div>
          </div>

          {/* Sertifikalar ve Başarılar */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-8">Sertifikalar ve Başarılar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Sertifikalarımız</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>ISO 9001:2015 Kalite Yönetim Sistemi</li>
                  <li>ISO 14001:2015 Çevre Yönetim Sistemi</li>
                  <li>OHSAS 18001 İş Sağlığı ve Güvenliği</li>
                  <li>Mesleki Yeterlilik Belgeleri</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Başarılarımız</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>2020 Yılın En İyi Harita Mühendislik Firması</li>
                  <li>2019 Teknoloji Kullanım Ödülü</li>
                  <li>2018 Müşteri Memnuniyeti Ödülü</li>
                  <li>500+ Başarılı Proje</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 