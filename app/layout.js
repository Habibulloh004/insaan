import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "INSAAN",
  description:
    "INSAAN – архитектурное бюро, создающее уникальные и функциональные пространства. Дизайн, проектирование, инновационные решения для вашего комфорта.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo.webp" sizes="48" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
