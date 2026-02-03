import Link from "next/link";
import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div
              key={service.id}
              className="border rounded-2xl p-6 hover:shadow-lg transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-center mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>

              <p className="text-sm text-gray-500 text-center mb-6">
                {service.subServices?.length || 0} services available
              </p>

              <Link
                href={`/services/${service.id}`}
                className="mt-auto mx-auto inline-flex items-center justify-center rounded-lg
                           bg-gradient-to-r from-[#5A0D26] to-[#8A1538]
                           px-6 py-2 text-sm font-medium text-white
                           hover:opacity-90 transition"
              >
                View details
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
