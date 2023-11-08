import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { NextIntlClientProvider } from "next-intl";
import "@styles/globals.css";
import { notFound } from "next/navigation";
import { Toaster } from "react-hot-toast";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }, { locale: "mm" }];
}

export const metadata = {
  title: "Shin Genki",
  description: "Let go of the old and make the most of the future",
};

const RootLayout = async ({ children, params: { locale } }) => {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (err) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="/assets/icons/fav-icon.svg"></link>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className={`app font-poppins`}>
            <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
            <Nav />
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
