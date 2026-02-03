export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600">
            Visit our typing center for fast and professional services.
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p><strong>Address:</strong> Doha, Qatar</p>
            <p><strong>Phone:</strong> +974 66789287</p>
            <p><strong>Email:</strong> famousservice1@gmail.com</p>
            <p><strong>Working Hours:</strong> 8:00 AM – 10:00 PM</p>
          </div>
        </div>

        {/* RIGHT - MAP */}
        <div className="rounded-xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8026738252765!2d51.47916767516748!3d25.31083297763799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db8e1ec8b93d%3A0x51078eea3c6c0cc5!2sFAMOUS%20SERVICES!5e0!3m2!1sen!2sqa!4v1770098113907!5m2!1sen!2sqa"
            width="100%"
            height="100%"
            className="min-h-[300px]"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
