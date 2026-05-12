import Head from "next/head";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ pageKey, children }) {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t(`meta.${pageKey}.title`)}</title>
        <meta name="description" content={t(`meta.${pageKey}.description`)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="app-shell">
        <Navbar />
        <main id="top" className="app-main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
