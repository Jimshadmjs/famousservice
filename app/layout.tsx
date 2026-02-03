// app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // import your Footer

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Main content */}
        <main className="flex-grow">{children}</main>
        
        {/* Footer always at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
