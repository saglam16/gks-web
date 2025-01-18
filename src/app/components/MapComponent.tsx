'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Leaflet ikonları için gerekli düzeltme
const DefaultIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent: React.FC = () => {
  useEffect(() => {
    // Leaflet CSS'ini dinamik olarak yükleme
    import('leaflet/dist/leaflet.css');
  }, []);

  return (
    <MapContainer
      center={[39.925533, 32.866287]} // Ankara koordinatları
      zoom={6}
      style={{ height: '100%', width: '100%' }}
      className="z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[39.925533, 32.866287]}>
        <Popup>
          GKS Harita Mühendislik
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent; 