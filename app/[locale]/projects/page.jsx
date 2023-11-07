"use client";

import TitleHeader from "@components/TitleHeader";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("nav");
  return (
    <section className="pt-20">
      <TitleHeader title={t("projects")} />
      <div className="max-w-[1280px] px-3 mx-auto mt-12">
        <div className="w-full bg-white rounded-[10px] shadow-md p-4 md:p-8 mt-12 relative">
          <div className="font-medium md:text-lg border-l-4 rounded-sm pl-2 mb-4 border-l-primary-green">
            Crowdfunding
          </div>
          <img
            src="/assets/images/project1.png"
            alt="project1"
            className="w-[900px] h-auto"
          />
          <img
            src="/assets/icons/texture.svg"
            alt="texture"
            className="hidden md:block absolute top-0 right-0 h-full mr-12"
          />
        </div>
        <div className="w-full bg-white rounded-[10px] shadow-md p-4 md:p-8 mt-12 relative">
          <div className="font-medium md:text-lg border-l-4 rounded-sm pl-2 mb-4 border-l-primary-green">
            Accommodation management platform
          </div>
          <img
            src="/assets/images/project2.png"
            alt="project1"
            className="w-[900px] h-auto"
          />
          <img
            src="/assets/icons/texture.svg"
            alt="texture"
            className="hidden md:block absolute top-0 right-0 h-full mr-12"
          />
        </div>
        <div className="w-full bg-white rounded-[10px] shadow-md p-4 md:p-8 mt-12 relative">
          <div className="font-medium md:text-lg border-l-4 rounded-sm pl-2 mb-4 border-l-primary-green">
            Online whiteboard (SAAS)
          </div>
          <img
            src="/assets/images/project3.png"
            alt="project1"
            className="w-[900px] h-auto"
          />
          <img
            src="/assets/icons/texture.svg"
            alt="texture"
            className="hidden md:block absolute top-0 right-0 h-full mr-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
