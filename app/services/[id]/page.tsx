import { notFound } from "next/navigation";
import { services } from "../../../data/services";

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

// ✅ Make page async for Next.js 14+
export default async function ServiceDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const service = services.find((s) => s.id === id);
  if (!service) return notFound();

  return (
    <main className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {service.title} in Qatar
        </h1>

        <p className="text-gray-600 text-center mb-10">{service.description}</p>

        {/* Sub-services as 4-column cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {service.subServices?.map((sub, idx) => (
            <div
              key={idx}
              className="border rounded-xl p-4 text-center hover:shadow-lg transition"
            >
              {sub}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
