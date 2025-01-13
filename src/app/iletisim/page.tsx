'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorDetail, setErrorDetail] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetail('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      console.log('Form verisi gönderiliyor:', data);
      
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('API yanıtı:', result);

      if (!response.ok) {
        throw new Error(result.error || 'Gönderim sırasında bir hata oluştu');
      }

      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Form gönderimi sırasında hata:', error);
      setSubmitStatus('error');
      setErrorDetail(error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">İletişim</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* İletişim Formu */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Bize Ulaşın</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                <p>Mesajınız gönderilirken bir hata oluştu.</p>
                {errorDetail && <p className="mt-2 text-sm">{errorDetail}</p>}
                <p className="mt-2">Lütfen daha sonra tekrar deneyin veya doğrudan bizimle iletişime geçin.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Hizmet
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                  required
                >
                  <option value="">Seçiniz</option>
                  <option value="kadastro">Parsel Sınırının Yerinde Gösterimi</option>
                  <option value="imar">İmar Uygulamaları</option>
                  <option value="cbs">Hus(Yapı Aplikasyon)</option>
                  <option value="halihazir">Halihazır Harita ve Kubaj Hesabı</option>
                  <option value="plankote">Vaziyet Planı, Röperli Kroki ve Bağımsız Bölüm Planı</option>
                  <option value="3d-modelleme">3D yapı Aplikasyon - Validasyon Kodu</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-black/90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
              </button>
            </form>
          </div>
          
          {/* İletişim Bilgileri ve Harita */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Adres</h3>
                  <p className="text-gray-600">
                    Balkan Mah. Lalezar Sok. No:10/9
                    <br />
                    Nilüfer/Bursa
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Telefon</h3>
                  <p className="text-gray-600">
                    <a href="tel:+905392217681" className="hover:text-black">
                      +90 (539) 221 76 81
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">E-posta</h3>
                  <p className="text-gray-600">
                    <a href="mailto:saglam16@gmail.com" className="hover:text-black">
                      saglam16@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Çalışma Saatleri</h3>
                  <p className="text-gray-600">
                    Pazartesi - Cuma: 09:00 - 18:00
                    <br />
                    Cumartesi: 09:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
            
            {/* Google Harita */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Konum</h2>
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.8901253809584!2d28.820640776889714!3d40.21462866781076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca13f395faa605%3A0xf173c7b22019074b!2sGKS%20Harita%20M%C3%BChendislik!5e0!3m2!1str!2str!4v1710271147953!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 