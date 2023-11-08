"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";

const Footer = () => {
  const t = useTranslations("nav");
  const t2 = useTranslations("hero");
  return (
    <footer className="mt-20 absolute w-full">
      <div className="bg-primary-green w-full px-5 text-white">
        <div className="max-w-[1280px] w-full flex justify-between mx-auto">
          <div className="w-2/3 md:w-1/2 my-10 text-sm md:text-base">
            <div className="font-semibold">Shin Genki Co.,Ltd</div>
            <div className="mt-6">
              No.204 (Ground Floor), 40 Street (Middle Block), <br />
              Kyauktada Township, Yangon.
            </div>
            <div className="mt-6">
              “ {t2("message-1")} &nbsp;
              {t2("message-2")} ”
            </div>
          </div>
          <div className="w-1/3 md:w-1/2 my-10 text-sm md:text-base">
            <Link href="/" className="block text-right">
              {t("home")}
            </Link>
            <Link href="/service" className="block mt-4 text-right">
              {t("service")}
            </Link>
            <Link href="/projects" className="block mt-4 text-right">
              {t("projects")}
            </Link>
            <Link href="/company" className="block mt-4 text-right">
              {t("company")}
            </Link>
            <Link href="/contact-us" className="block mt-3 text-right">
              {t("contact-us")}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-secondary-green w-full h-8 flex-center text-white text-sm">
        Copyright © 2023 ShinGenki Co., Ltd.
      </div>
    </footer>
  );
};

export default Footer;
