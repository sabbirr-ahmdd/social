import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata = {
  title: "Roppal — Where events come alive",
  description: "Create, discover and join events with your circle or the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#f0f4f1] text-[#0f1512] antialiased`}>
        {children}
      </body>
    </html>
  );
}