'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Leaflet'i client tarafında dinamik olarak yüklüyoruz
const MapComponent = dynamic(() => import('../../components/MapComponent'), {
  ssr: false, // Sunucu tarafında render edilmemesi için
  loading: () => <div className="w-full h-screen flex items-center justify-center">Harita yükleniyor...</div>
});

export default function HaritaSayfasi() {
  return (
    <div className="w-full h-screen">
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Yükleniyor...</div>}>
        <MapComponent />
      </Suspense>
    </div>
  );
} 