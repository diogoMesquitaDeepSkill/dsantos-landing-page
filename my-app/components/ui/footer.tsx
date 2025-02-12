/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <footer className="grid gap-4 lg:gap-6">
          {/* Logo - Separate from Slogan */}
          <div className="flex justify-start">
            <img src="/logo-onlydsantos250.png" alt="logo" className="h-7" />
          </div>

          {/* Slogan - Takes Full Width */}
          <p className="font-bold text-lg text-center lg:text-left w-full">
            {t("inspiringSlogan")}
          </p>
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
