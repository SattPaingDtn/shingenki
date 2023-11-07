"use client";

import TitleHeader from "@components/TitleHeader";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Reveal } from "@components/Reveal";

const ContactUs = () => {
  const t = useTranslations("contactUs");
  return (
    <section className="pt-20">
      <TitleHeader title={t("contact-us")} />
      <div className="max-w-[1280px] mx-auto px-3 mt-16 relative">
        <Reveal>
          <div className="flex-end">
            <div className="w-full md:w-[85%] h-[556px] bg-white border rounded-[5px] shadow-lg">
              <div className="md:pl-[23%] px-4 md:pr-9">
                <div className="font-semibold text-xl mt-12">
                  {t("sendMessage")}
                </div>
                <div className="font-medium mt-6">{t("name")}</div>
                <input
                  type="text"
                  className="mt-2 border border-primary-green w-full h-8 rounded-sm px-2 text-sm"
                />
                <div className="font-medium mt-6">{t("email")}</div>
                <input
                  type="text"
                  className="mt-2 border border-primary-green w-full h-8 rounded-sm px-2 text-sm"
                />
                <div className="font-medium mt-6">{t("phone")}</div>
                <input
                  type="text"
                  className="mt-2 border border-primary-green w-full h-8 rounded-sm px-2 text-sm"
                />
                <div className="font-medium mt-6">{t("message")}</div>
                <textarea className="mt-2 border border-primary-green w-full max-h-20 h-20 rounded-sm px-2 py-1 text-sm" />
                <div className="flex-end">
                  <button className="mt-4 bg-primary-green px-10 py-1 text-white rounded-md">
                    {t("send")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="
              md:w-[400px]
              md:h-[508px] 
              md:mt-6
              bg-primary-green 
              border 
              rounded-[5px] 
              shadow-lg 
              md:absolute 
              top-0 
              text-white py-12 md:py-6 px-9
            "
          >
            <div className="font-semibold text-xl border-b pb-3 border-b-white">
              {t("contactInformation")}
            </div>
            <div className="mt-6 flex">
              <Image
                src="/assets/icons/phone.svg"
                width={18}
                height={18}
                alt="phone"
                className="mr-3 h-auto w-auto"
              />
              <Link href="tel:095087117">095087117</Link>
            </div>
            <div className="mt-6 flex">
              <Image
                src="/assets/icons/envelope.svg"
                width={18}
                height={18}
                alt="phone"
                className="mr-3 h-auto w-auto"
              />
              <Link href="mailto:shingenki@info.com">shingenki@info.com</Link>
            </div>
            <div className="mt-6 flex">
              <Image
                src="/assets/icons/facebook-logo.svg"
                width={0}
                height={0}
                alt="facebook"
                className="mr-3 h-[24px] w-[24px]"
              />
              <Link
                href="https://www.facebook.com/shingenkimyanmar"
                target="_blank"
              >
                facebook.com/shingenkimyanmar
              </Link>
            </div>
            <div className="mt-6 flex items-start">
              <Image
                src="/assets/icons/map.svg"
                width={18}
                height={18}
                alt="phone"
                className="mr-3 h-auto w-auto"
              />
              No.204 (Ground Floor), <br />
              40 Street (Middle Block), <br />
              Kyauktada Township, Yangon
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactUs;
