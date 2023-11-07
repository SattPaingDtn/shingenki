"use client";

import { Reveal } from "@components/Reveal";
import TitleHeader from "@components/TitleHeader";
import { useTranslations } from "next-intl";

const Company = () => {
  const t = useTranslations("company");

  const companyInfos = [
    { title: t("companyName"), info: "Shin Genki Co., Ltd" },
    { title: t("president"), info: "Aida Shinsukei" },
    {
      title: t("businessLine"),
      info: "IT offshore development・outsource \n development・quasi-mandate contract (SES,labor)",
    },
    { title: t("contactInfo"), info: "+959 508 7117" },
    {
      title: t("address"),
      info: "No.204(Ground floor), 40th Street (Middle Block), 9 Ward, Kyauktada Township Yangon, Myanmar., Yangon, Myanmar",
    },
    { title: t("founded"), info: "June , 21 , 2018" },
    { title: t("capital"), info: "100,000 USD" },
    { title: t("noOfEmployee"), info: "4 (current)" },
  ];

  return (
    <section className="pt-20">
      <TitleHeader title={t("company")} />
      <div className="max-w-[1280px] mx-auto px-3 mt-9 md:mt-12">
        <Reveal>
          {companyInfos.map((companyInfo, index) => (
            <div className="w-full flex flex-wrap" key={index}>
              <div className="w-full md:w-[20%] mr-1 md:px-2 md:border-b-2 mt-2 md:py-4 border-b-primary-green text-primary-green font-semibold">
                {companyInfo.title}
              </div>
              <div className="w-full md:w-[80%] md:px-2 border-b-2 py-2 md:py-4 border-b-black">
                {companyInfo.info}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Company;
