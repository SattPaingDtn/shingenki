"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const OurExpertise = () => {
  return (
    <div className="max-w-[1152px] h-full mx-auto p-3 mt-10 md:mt-[120px]">
      <div>
        <div className="text-xl md:text-3xl font-medium flex-center w-full">
          <div className="relative px-3 md:px-6">
            Our <span className="text-primary-green">Expertise</span>
            <div className="absolute mt-1.5 md:mt-2 top-0 left-0 w-1 md:w-2 h-4 md:h-5 bg-black"></div>
            <div className="absolute mt-1.5 md:mt-2 top-0 right-0 w-1 md:w-2 h-4 md:h-5 bg-primary-green"></div>
          </div>
        </div>
        <Reveal>
          <div className="mt-12 flex-start flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3 flex-center md:mt-9 md:px-2">
              <motion.div
                className="expertise-card"
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex-center m-4 border-b border-b-primary-green">
                  <Image
                    src="/assets/icons/frontend.svg"
                    width={100}
                    height={100}
                    alt="frontend"
                    className="w-auto h-auto my-4"
                  />
                </div>
                <div className="font-semibold text-center mb-4">Front end</div>
                <div className="text-center text-base">
                  SPA (Vue.js , Nuxt.js , React.js),
                  <br />
                  JavaScript / TypeScript ,<br />
                  HTML , CSS , SCSS , Bootstrap ,<br />
                  etc ...
                </div>
              </motion.div>
            </div>
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 flex-center mt-9 md:px-2"
              whileHover={{ scale: 1.1 }}
            >
              <div className="expertise-card">
                <div className="flex-center m-4 border-b border-b-primary-green">
                  <Image
                    src="/assets/icons/backend.svg"
                    width={100}
                    height={100}
                    alt="frontend"
                    className="w-auto h-auto my-4"
                  />
                </div>
                <div className="font-semibold text-center mb-4">Back end</div>
                <div className="text-center text-base">
                  Nest , Express
                  <br />
                  ( javaScript / TypeScript ) ,<br />
                  Go , Spring (Java ) , Python ,<br />
                  etc ...
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 flex-center mt-9 md:px-2"
              whileHover={{ scale: 1.1 }}
            >
              <div className="expertise-card">
                <div className="flex-center m-4 border-b border-b-primary-green">
                  <Image
                    src="/assets/icons/cloud.svg"
                    width={100}
                    height={100}
                    alt="frontend"
                    className="w-auto h-auto my-4"
                  />
                </div>
                <div className="font-semibold text-center mb-4">Cloud</div>
                <div className="text-center text-base">
                  AWS , Linux , Serverless ,
                  <br />
                  Micro Service , Monitoring ,<br />
                  Audit , CI / CD , etc ...
                  <br />
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default OurExpertise;
