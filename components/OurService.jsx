"use client";

import Image from "next/image";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const OurService = () => {
  const currentLang = useTranslations("lang")("lang");
  const t = useTranslations("service");
  const [services, setServices] = useState(null);
  const en_services = [
    { "text-1": "System development", "text-2": "by using Japan Quality" },
    { "text-1": "Providing", "text-2": "System development procedure" },
    { "text-1": "Providing", "text-2": "Latest Technology" },
    { "text-1": "Providing", "text-2": "Web Development" },
    { "text-1": "Providing", "text-2": "User Interface" },
  ];
  const ja_services = [
    { "text-1": "日本品質+αの", "text-2": "システム開発" },
    { "text-1": "システム開発の", "text-2": "全ての工程を提供" },
    { "text-1": "最新技術", "text-2": "を提供" },
    { "text-1": "ウェブ開発の", "text-2": "提供" },
    { "text-1": "ユーザーインターフェースの", "text-2": "提供" },
  ];
  const mm_services = [
    {
      "text-1": "Japanနိုင်ငံ quality တွေကိုအသုံးပြုပြီး",
      "text-2": "System Developmentလုပ်ပေးခြင်း",
    },
    {
      "text-1": "System development ရဲ့ လုပ်ထုံးလုပ်နည်း",
      "text-2": "တွေကို ထောက်ပံ့ပေးခြင်း ",
    },
    {
      "text-1": "နောက်ဆုံးပေါ် နည်းပညာတွေကို",
      "text-2": "အသုံးပြုပေးခြင်း",
    },
    { "text-1": "Web Development", "text-2": "ထောက်ပံ့ပေးခြင်း" },
    { "text-1": "User Interface", "text-2": "ရေးဆွဲပေးခြင်း" },
  ];

  useEffect(() => {
    if (currentLang === "en") {
      setServices(en_services);
    } else if (currentLang === "ja") {
      setServices(ja_services);
    } else {
      setServices(mm_services);
    }
  }, [currentLang]);

  return (
    <div className="max-w-[1152px] w-full h-full mx-auto p-3 mt-8 md:mt-[90px]">
      <div>
        <div className="text-2xl md:text-3xl font-medium flex-center w-full">
          <div className="relative px-3 md:px-6">
            Our Services <span className="text-primary-green">For you</span>
            <div className="absolute mt-2 md:mt-2 top-0 left-0 w-1 md:w-2 h-4 md:h-5 bg-black"></div>
            <div className="absolute mt-2 md:mt-2 top-0 right-0 w-1 md:w-2 h-4 md:h-5 bg-primary-green"></div>
          </div>
        </div>
        <Reveal>
          <div className="mt-9 flex-start flex-wrap">
            {services &&
              services.map((service, index) => (
                <div
                  className="w-full md:w-1/2 lg:w-1/3 flex-center mt-9 md:px-2"
                  key={index}
                >
                  <div
                    className="our-service-card max-w-[360px] w-full relative flex-center"
                    key={index}
                  >
                    <div className="text-center font-medium text-base md:text-lg">
                      <div className="leading-9">{service["text-1"]}</div>
                      <div className="text-primary-green">
                        {service["text-2"]}
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 mt-2 mr-2 animate-wiggle">
                      <Image
                        src="assets/icons/star.svg"
                        alt="star"
                        width={30}
                        height={30}
                        priority
                      />
                    </div>
                  </div>
                </div>
              ))}
            <div className="w-full md:w-1/2 lg:w-1/3 flex-center mt-9">
              <Link
                href="/service"
                className="w-full max-w-[360px] md:w-[210px] h-11 md:h-[50px] bg-white border rounded-[5px] border-primary-green shadow-lg flex-center"
              >
                {t("more")}{" "}
                <span className="text-primary-green">
                  &nbsp;{t("details")}&nbsp;
                </span>
                <Image
                  src="/assets/icons/arrow.svg"
                  width={9}
                  height={9}
                  alt="arrow"
                  className="w-auto h-auto ml-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default OurService;
