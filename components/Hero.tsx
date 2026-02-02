"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center
      bg-gradient-to-b from-[#5A0D26] to-[#8A1538] text-white">

      <div className="max-w-6xl mx-auto px-6 pt-28 text-center">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Professional Typing & Document Services in Doha
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-4 text-lg md:text-xl text-white/90"
        >
          Fast, accurate, and reliable services for individuals and businesses.
        </motion.p>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <StatBox value="100+" label="Services" />
          <StatBox value="10K+" label="Happy Clients" />
          <StatBox value="15+" label="Years Experience" />
        </motion.div>

      </div>
    </section>
  );
}

/* =========================
   STAT BOX
========================= */

function StatBox({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="border border-white/70 rounded-3xl px-8 py-6
      transition-all duration-300
      hover:bg-white hover:text-[#8A1538]"
    >
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="text-sm mt-1 opacity-80">{label}</p>
    </div>
  );
}
