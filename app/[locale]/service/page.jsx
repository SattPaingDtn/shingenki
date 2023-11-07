"use client";

import TitleHeader from "@components/TitleHeader";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Reveal } from "../../../components/Reveal";

const Service = () => {
  const currentLang = useTranslations("lang")("lang");
  const t = useTranslations("service");
  const [services, setServices] = useState(null);

  const en_services = [
    {
      "title-1": "System development",
      "title-2": "by using Japan Quality",
      description:
        "With experience and the knowledge in the forefront of system development in 15 years in Japan. We can develop and provide a system to customers without giving  a sense of incongruity. Japanese communicator is also available.",
    },
    {
      "title-1": "Providing",
      "title-2": "System development procedure",
      description:
        "We can perform all the processes from definition of System Requirements,to Design,Construction and Operation.In fact, we receive a lot of project from Requirements definition support, system ground design.",
    },
    {
      "title-1": "Providing",
      "title-2": "Latest technology",
      description:
        "We always follow the latest technology,and provide the systems using new technologies. We can build a system provide value for a long time by adopting new technology.",
    },
    {
      "title-1": "Providing",
      "title-2": "Web Development",
      description:
        "We will create a website according to customer request. Websites are responsive . Genki developers create a good website for customers .",
    },
    {
      "title-1": "Providing",
      "title-2": "User Interface Design",
      description:
        "At our company, our designers are using trending designs.We will create a design according to customer request.",
    },
  ];

  const ja_services = [
    {
      "title-1": "日本品質+αの",
      "title-2": "システム開発",
      description:
        "日本で15年間、システム導入の最前線にいた有識者のもと開発を進めました。私たちはお客様に違和感なくシステムを開発・提供できます。日本語でのコミュニケーションも可能です。",
    },
    {
      "title-1": "システム開発の",
      "title-2": "全ての工程を提供",
      description:
        "システムの要件定義、設計、構築、 運用まで、すべての工程を実施可能です。実際、要件定義支援、システム基盤設計などの案件も多くいただいております。",
    },
    {
      "title-1": "最新技術",
      "title-2": "を提供",
      description:
        "最新の技術を追求し、新しい技術を活用したシステムを提供します。 新しいテクノロジーを導入することで、長期的に価値を提供できるシステムを構築できます。",
    },
    {
      "title-1": "ウェブ開発の",
      "title-2": "提供",
      description:
        "お客様のご要望に応じてWebサイトを作成しております。 ウェブサイトに関してはレスポンシブを使用しております。 Genki の開発者は、お客様のために優れた Web サイトを作成します。",
    },
    {
      "title-1": "ユーザーインターフェースの",
      "title-2": "提供",
      description:
        "弊社ではデザイナーがトレンドのデザインを採用しております。お客様のご要望に応じてデザインを作成いたします。",
    },
  ];

  const mm_services = [
    {
      "title-1": "Japanနိုင်ငံ quality တွေကိုအသုံးပြုပြီး",
      "title-2": "System Developmentလုပ်ပေးခြင်း",
      description:
        "Japan မှာ ၁၅ နှစ်ရှိပြီ ဖြစ်တဲ့ အတွေ့ အကြုံနဲ့ knowledge တွေကို နောက်ခံထားပြီး system development လုပ်နေပါတယ်။customer တွေကို အဆင်မပြေမှုတွေမပေးဘဲ develop လုပ်နေပါတယ် ။ ဘာသာပြန်ပေးတဲ့communicator တွေလဲရှိပါတယ်။",
    },
    {
      "title-1": "System development ရဲ့ လုပ်ထုံးလုပ်နည်း",
      "title-2": "တွေကို ထောက်ပံ့ပေးခြင်း",
      description:
        "System Requirement , Design တွေ construction နဲ့ operation စတဲ့ processတွေကို ဆောင်ရွက် ပေးနေပါတယ် ။ ဒါ့အပြင် requirements တွေကနေ project တွေအများကြီး လက်ခံပါတယ် ။",
    },
    {
      "title-1": "နောက်ဆုံးပေါ် နည်းပညာတွေကို",
      "title-2": "အသုံးပြုပေးခြင်း",
      description:
        "ကျွန်တော်တို့ companyသည် နောက်ဆုံးပေါ် နည်းပညာတွနောက်လိုက်ပြီး develop လုပ်လေ့ ရှိပါတယ် ။ new technology ကိုအသုံးပြုပြီး system တွေကို provide လုပ်ပါတယ် ။",
    },
    {
      "title-1": "Web Development",
      "title-2": "ထောက်ပံ့ပေးခြင်း",
      description:
        "Customer request ပေါ် မူတည်ပြီး websiteတွေကို create လုပ်ပြီး websiteတွေအားလုံးကိုလဲ responsive အနေနဲ့ ဖန်တီးပေးပါတယ် ။ customerတွေအတွက် Genki Developers တွေက ကောင်းမွန်သော website တွေကို ဖန်တီးပေးပါတယ်။",
    },
    {
      "title-1": "User Interface",
      "title-2": "ရေးဆွဲပေးခြင်း",
      description:
        "ကျွန်တော်တို့ company မှာရှိတဲ့ designerတွေသည် trend ဖြစ်နေတဲ့ design တွေကို သုံးပြီး design ဆွဲပေးပါတယ် ။ customer request ပေါ်မူတည်ပြီးလဲ design တွေကိုcreate လုပ်ပေးပါတယ်။ ",
    },
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
    <section className="pt-20">
      <TitleHeader title={t("service")} />
      <div className="md:max-w-[1280px] mx-auto md:mt-4 flex-start flex-wrap">
        {services?.map((service, index) => (
          <div
            className="w-full md:w-1/2 lg:w-1/3 flex-center mt-14"
            key={index}
          >
            <div className="service-card">
              <div
                className="our-service-card relative flex-center"
                key={index}
              >
                <div className="text-center font-medium text-lg">
                  <div>{service["title-1"]}</div>
                  <div className="text-primary-green">{service["title-2"]}</div>
                </div>
                <div className="absolute top-0 right-0 mt-2 mr-2 animate-wiggle">
                  <Image
                    src="/assets/icons/star.svg"
                    alt="star"
                    width={30}
                    height={30}
                    priority
                  />
                </div>
              </div>
              <div className="my-4">{service.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
