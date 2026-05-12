import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const router = useRouter();
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    setNextUrl(`${window.location.origin}/contact?sent=1`);
  }, []);

  return (
    <div className="contact-form-card">
      <div className="section-heading">
        <span className="section-eyebrow">{t("contactPage.eyebrow")}</span>
        <h2 className="section-title">{t("contactPage.formTitle")}</h2>
        <p className="section-description">{t("contactPage.formDescription")}</p>
      </div>

      {router.query.sent === "1" ? (
        <div className="status-banner">{t("contactPage.success")}</div>
      ) : null}

      <form
        action="https://formsubmit.co/mariantonietachacondibacco@gmail.com"
        method="POST"
        className="contact-form"
      >
        <label className="field">
          <span>{t("contactPage.fields.name")}</span>
          <input
            type="text"
            name="name"
            required
            placeholder={t("contactPage.placeholders.name")}
          />
        </label>

        <label className="field">
          <span>{t("contactPage.fields.email")}</span>
          <input
            type="email"
            name="email"
            required
            placeholder={t("contactPage.placeholders.email")}
          />
        </label>

        <label className="field">
          <span>{t("contactPage.fields.message")}</span>
          <textarea
            name="message"
            required
            rows="6"
            placeholder={t("contactPage.placeholders.message")}
          />
        </label>

        <label className="consent-row">
          <input type="checkbox" name="consent" required />
          <span>{t("contactPage.fields.consent")}</span>
        </label>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Portfolio contact" />
        {nextUrl ? <input type="hidden" name="_next" value={nextUrl} /> : null}

        <button type="submit" className="primary-button">
          {t("contactPage.fields.submit")}
        </button>
      </form>
    </div>
  );
}
