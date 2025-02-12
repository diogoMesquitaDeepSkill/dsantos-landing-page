/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <footer className="grid gap-3 lg:gap-4 text-center lg:text-left">
          {/* Logo - Centered on Mobile, Left on Larger Screens */}
          <div className="flex justify-center lg:justify-start">
            <img src="/logo-onlydsantos250.png" alt="logo" className="h-7" />
          </div>

          {/* Slogan - Centered on Mobile, Left on Desktop */}
          <p className="font-bold text-lg w-full">{t("inspiringSlogan")}</p>

          {/* Clickable Email - Styled Properly */}
          <a
            href="mailto:info@dsantos.de"
            className="font-bold text-lg w-full hover:underline"
          >
            info@dsantos.de
          </a>
        </footer>

        {/* Copyright - Aligned Below */}
        <div className="mt-6 border-t pt-6 text-center md:text-left text-sm font-bold">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
