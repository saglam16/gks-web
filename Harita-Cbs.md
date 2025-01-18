# Next.js Harita ve CBS (Coğrafi Bilgi Sistemleri) Entegrasyonu Rehberi

## 1. Header'a Harita Sekmesi Ekleme
- `components/Header.js` (veya ilgili header bileşeni) dosyasına "Harita" sekmesi eklenecek
- Yeni route `/harita` olarak tanımlanacak

## 2. Gerekli Paketlerin Kurulumu
```bash
npm install leaflet react-leaflet
# veya
yarn add leaflet react-leaflet
```

## 3. Harita Sayfası Oluşturma
1. `pages/harita.js` dosyası oluşturulacak
2. Temel harita bileşeni implementasyonu yapılacak

## 4. Önerilen CBS Özellikleri
- Katman kontrolü
- Çizim araçları
- Koordinat gösterimi
- Mesafe ölçümü
- Alan hesaplama
- GeoJSON desteği

## 5. Örnek Kod Yapısı
```javascript
// pages/harita.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const HaritaSayfasi = () => {
  return (
    <MapContainer 
      center={[39.925533, 32.866287]} // Ankara koordinatları
      zoom={6} 
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}

export default HaritaSayfasi
```

## 6. Özelleştirmeler
1. Harita Katmanları
   - OpenStreetMap (ücretsiz)
   - MapBox (kısıtlı ücretsiz)
   - Google Maps (ücretli)

2. CBS Araçları
   - Draw tools
   - Measure tools
   - Layer control
   - Coordinate display

## 7. Performans Optimizasyonu
- Lazy loading kullanımı
- Harita tile'larının önbelleğe alınması
- Büyük veri setleri için clustering

## 8. İleri Seviye Özellikler
- WMS servisleri entegrasyonu
- Vektör katmanları desteği
- Özel semboloji
- Veri analizi araçları

## 9. Güvenlik Önlemleri
- API anahtarlarının güvenli yönetimi
- Kullanıcı erişim kontrolü
- Veri doğrulama

## 10. Test ve Deployment
- Harita bileşenlerinin test edilmesi
- Performans testleri
- Production build optimizasyonları

## Kaynaklar
- [React-Leaflet Dokümantasyonu](https://react-leaflet.js.org/)
- [Leaflet Dokümantasyonu](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [MapBox Dokümantasyonu](https://docs.mapbox.com/) 