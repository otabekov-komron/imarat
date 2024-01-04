import type { Metadata } from "next";
import "../styles/main.scss";
import '../styles/_about.scss'
import '../styles/_home.scss'
import '../styles/_services.scss'
import '../styles/_contacts.scss'
import '../styles/_news.scss'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FixedNavbar from "@/components/FixedNavbar";

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
