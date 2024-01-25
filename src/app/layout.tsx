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
import Script from "next/script";
import Head from "next/head";

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
      <Head>
        {/* Apple Touch Icons */}
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#F3CD00" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
        <Script src="//code.jivo.ru/widget/Ux14XFCgl4" async />
      </body>
    </html>
  );
}
