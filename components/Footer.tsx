export default function Footer() {
  return (
    <footer className="bg-[#8A1538] text-white py-6">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
        <p className="text-xs opacity-70">
          © {new Date().getFullYear()} Famous Typing Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
