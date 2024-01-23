import type { Metadata } from "next";
import "../styles/main.scss";
import "../styles/_about.scss";
import "../styles/_home.scss";
import "../styles/_services.scss";
import "../styles/_contacts.scss";
import "../styles/_news.scss";
import "../styles/_projects.scss";
import "../styles/_error.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Script from "next/script";

export const metadata: Metadata = {
  title: "IMARAT Group",
  description:
    "Добро пожаловать в группу 'Imarat'. Мы - страстная команда энтузиастов дизайна, посвятивших себя достижению отличных результатов в каждом проекте. Нашей основной целью является понимание и удовлетворение потребностей каждого клиента, предоставляя исключительные дизайнерские услуги, соответствующие их видению.",
  keywords:
    "IMARAT, HyperNova, ремонт квартир в ташкенте, дизайн интерьера, евро ремонт квартир, неоклассика ремонт, хайтек ремонт, Ремонт в стиле Хай тек, ремонт нежилых помещений, ремонт дом, ремонт квартир и дизайн, мастер по ремонту квартир, ремонтная компания, качественный ремонт квартир, быстрый ремонт квартиры, Дешевый и качественный ремонт  ремонт, ремонт в ташкенте, ремонт квартир в Джизаке, ремонт квартир в Андижане, ремонт квартир в Бухаре, ремонт квартир в Кашкадарье, ремонт квартир в Навои, ремонт квартир в Намангане, ремонт квартир в Самарканде, ремонт квартир в Сырдарье, ремонт квартир в Сурхандарье, ремонт квартир в Фергане, ремонт квартир в Хорезме, Современный ремонт квартир в Ташкенте и области, РЕМОНТ И ОТДЕЛКА КВАРТИР, ДОМОВ И ОФИСОВ В ТАШКЕНТ, Ремонт квартир, Дизайнерский Ремонт под ключ",
  verification: {
    google: "qcbb5yShkr2fte8G-yQ3rRbCuG7KLTweQUkyfc68k9w",
    yandex: "3587d7d9bc9d5354",
  },
  icons: {
    icon: ["/public/favicon.ico?v=4"],
    apple: ["/public/apple-touch-icon.png?v=4"],
    shortcut: ["/public/apple-touch-icon.png"],
  },
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
        <Script src="//code.jivo.ru/widget/Ux14XFCgl4" async />
      </body>
    </html>
  );
}
