import { I18nextProvider } from "react-i18next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import { AppProvider } from "../components/AppProvider";
import i18n from "../lib/i18n";
import "../styles/globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <AppProvider>
        <div
          className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}
        >
          <Component {...pageProps} />
        </div>
      </AppProvider>
    </I18nextProvider>
  );
}

export default MyApp;
