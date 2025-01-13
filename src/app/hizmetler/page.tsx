import Link from "next/link";
import Image from "next/image";
import { getAllServices } from "@/lib/getServiceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz - GKS Harita Mühendislik",
  description: "GKS Harita Mühendislik olarak sunduğumuz profesyonel harita mühendisliği hizmetleri",
};

export default function Services() {
  const services = getAllServices();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Hizmetlerimiz</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/hizmetler/${service.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={`/${service.id}.jpg`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                    {service.title}
                  </h2>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 text-blue-600 group-hover:text-blue-800">
                    Detaylı Bilgi →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 