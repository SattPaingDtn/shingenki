"use client";

import TitleHeader from "@components/TitleHeader";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Reveal } from "@components/Reveal";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const t = useTranslations("contactUs");

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const sendEmail = async () => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      toast.success(`Hey ${data.name} , your message was sent successfully!`);
      setData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section className="pt-20">
      <TitleHeader title={t("contact-us")} />
      <div className="max-w-[1152px] mx-auto px-3 mt-16 relative">
        <Reveal>
          <div className="flex-end">
            <div className="w-full lg:w-[85%] h-[556px] bg-white border rounded-[5px] shadow-lg">
              <div className="lg:pl-[27%] px-4 lg:pr-9">
                <div className="font-semibold text-xl mt-12">
                  {t("sendMessage")}
                </div>
                <div className="font-medium mt-6">{t("name")}</div>
                <input
                  type="text"
                  id="name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="mt-2 border border-primary-green w-full h-8 rounded-sm px-2 text-sm"
                />
                <div className="font-medium mt-6">{t("email")}</div>
                <input
                  type="email"
                  id="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="mt-2 border border-primary-green w-full h-8 rounded-sm px-2 text-sm"
                />
                <div className="font-medium mt-6">{t("phone")}</div>
                <input
                  type="text"
                  id="phone"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  className="mt-2 border border-primary-green w-full h-8 rounded-sm px-2 text-sm"
                />
                <div className="font-medium mt-6">{t("message")}</div>
                <textarea
                  id="message"
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  className="mt-2 border border-primary-green w-full max-h-20 h-20 rounded-sm px-2 py-1 text-sm"
                />
                <div className="flex-end">
                  <button
                    onClick={() => sendEmail()}
                    className="mt-4 bg-primary-green px-10 py-1 text-white rounded-md"
                  >
                    {t("send")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="
              lg:w-[400px]
              lg:h-[508px] 
              lg:mt-6
              bg-primary-green 
              border 
              rounded-[5px] 
              shadow-lg 
              lg:absolute 
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
