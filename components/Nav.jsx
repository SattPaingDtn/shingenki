"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { useRouter, usePathname } from "next-intl/client";
import { motion } from "framer-motion";
import { useState } from "react";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  let currentLang = useTranslations("lang")("lang");

  const [isOpen, setIsOpen] = useState(false);

  const changeLocale = (val) => {
    currentLang = val.target.value;
    router.replace(pathname, { locale: currentLang });
  };

  return (
    <nav className="relative z-10">
      <div className="fixed w-full shadow-lg">
        <div className="relative h-8 bg-secondary-green flex-end gap-3 md:gap-6 text-secondary-white px-3 md:px-6 text-sm">
          <div>+9595087117</div>
          <div className="w-[1px] h-5 bg-secondary-white"></div>
          <div>
            <label htmlFor="languages" className="mr-2">
              Language :
            </label>
            <select
              id="languages"
              defaultValue={currentLang}
              className="bg-gray-800 py-[4px] px-1 rounded-md text-center"
              onChange={(e) => changeLocale(e)}
            >
              <option value="en">English</option>
              <option value="ja">Japan</option>
              <option value="mm">Myanmar</option>
            </select>
          </div>
        </div>
        <div className="h-14 bg-primary-green flex-between">
          <div className="flex-start h-full">
            <div className="bg-white h-full w-27 md:w-36 flex-center px-6">
              <Link href="/">
                <img src="/assets/images/logo.jpg" alt="logo" className="" />
              </Link>
            </div>
            <div className="border-b-[56px] border-b-white border-r-[56px] border-r-transparent"></div>
          </div>
          <div
            className="w-7 h-7 mx-3 cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon color="white" />
            ) : (
              <Bars3BottomRightIcon color="white" />
            )}
          </div>
          <div
            className={`
                md:flex md:items-center
                text-right
                md:pb-0 pb-3 
                absolute md:static 
                md:z-auto z-[-1] 
                left-0 w-full 
                md:w-auto 
                md:pl-0 pl-9 
                bg-primary-green md:bg-transparent
                text-white gap-11
                px-6
                transition-all 
                duration-500 
                ease-in 
                ${isOpen ? "top-[87px]" : "top-[-490px]"}
              `}
          >
            <Link
              href="/"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="my-4 md:m-0"
              >
                {t("home")}
              </motion.div>
            </Link>
            <Link
              href="/service"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="my-4 md:m-0"
              >
                {t("service")}
              </motion.div>
            </Link>
            <Link
              href="/projects"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="my-4 md:m-0"
              >
                {t("projects")}
              </motion.div>
            </Link>
            <Link
              href="/company"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="my-4 md:m-0"
              >
                {t("company")}
              </motion.div>
            </Link>
            <Link
              href="/contact-us"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="my-4 md:m-0"
              >
                {t("contact-us")}
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
