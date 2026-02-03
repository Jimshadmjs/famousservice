// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo + Name clickable */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Famous Service Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-lg font-semibold text-[#8A1538]">
            Famous Service
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#8A1538]">
            Home
          </Link>
          <Link href="#services" className="hover:text-[#8A1538]">
            Services
          </Link>
          <Link href="#contact" className="hover:text-[#8A1538]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
