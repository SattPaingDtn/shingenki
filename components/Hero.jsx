"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="w-full h-[510px] md:h-[calc(100vh-84px)] md:min-h-[740px] hero-bg">
      <div className="max-w-[1280px] h-full mx-auto p-3 flex items-center">
        <div className="w-full">
          <Reveal>
            <div
              className="relative pl-6 md:pl-9 pt-2 md:pt-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-medium text-base md:text-lg">
                {t("subtitle-1")}{" "}
                <span className="text-primary-green">{t("genki-system")}</span>
              </div>
              <div className="text-2xl md:text-5xl my-1 md:my-2">
                SOFTWARE <span className="text-primary-green">DEVELOPMENT</span>
              </div>
              <div className="font-medium text-base md:text-base">
                {t("subtitle-2")}{" "}
                <span className="text-primary-green">{t("flexible")}</span>{" "}
                {t("and")}&nbsp;
                <span className="text-primary-green">
                  {t("creative-applications")}
                </span>
              </div>
              <div className="absolute top-0 left-0 flex-center w-3 md:w-6 flex-wrap">
                <div className="w-3 md:w-6 h-3 md:h-6 rounded-full bg-primary-green"></div>
                <div className="w-[2px] h-28 md:h-32 bg-black"></div>
              </div>
            </div>
            <div
              className="flex-center md:flex md:justify-end mt-9 mb-6 md:my-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="assets/icons/hero-cover.svg"
                alt="hero"
                className="w-full md:w-auto md:h-auto"
              />
            </div>
            <div
              className="text-lg md:text-2xl font-sail leading-6 md:leading-10 flex-center md:flex md:justify-end md:mr-[90px] mt-4 md:mt-9"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                “{" "}
                <span className="font-poppins"> &nbsp; {t("message-1")} </span>
                <br />
                <span className="font-poppins"> {t("message-2")}&nbsp;</span>”
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Hero;
