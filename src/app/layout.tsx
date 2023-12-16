import type { Metadata } from "next";
import "../styles/main.scss";
import '../styles/about.scss'
import '../styles/home.scss'
import '../styles/services.scss'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "IMARAT Group",
  description: "Powered by HyperNova",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
