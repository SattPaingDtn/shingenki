"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="w-full h-[510px] md:h-[800px] lg:h-[calc(100vh-84px)] lg:min-h-[740px] hero-bg border-b border-b-gray-300 md:border-b-0">
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
              <div class="text-2xl md:text-5xl my-0.5 [text-wrap:balance] bg-clip-text">
                SOFTWARE{" "}
                <span
                  class="
                      text-primary-green 
                      inline-flex 
                      flex-col 
                      h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] 
                      md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] 
                      overflow-hidden
                    "
                >
                  <ul class="block animate-text-slide text-left leading-tight [&_li]:block">
                    <li>DEVELOPMENT</li>
                    <li>DESIGN</li>
                    <li aria-hidden="true">DEVELOPMENT</li>
                  </ul>
                </span>
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
                <div className="w-[2px] h-24 md:h-32 bg-black"></div>
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
                className="w-2/3 md:w-auto md:h-auto"
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
