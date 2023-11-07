import Image from "next/image";

const WorkingWith = () => {
  return (
    <div className="max-w-[1280px] h-full mx-auto p-3 mt-10 md:mt-[120px]">
      <div>
        <div className="text-xl md:text-3xl font-medium flex-center w-full">
          <div className="relative px-3 md:px-6">
            We are <span className="text-primary-green">Working with</span>
            <div className="absolute mt-1.5 md:mt-2 top-0 left-0 w-1 md:w-2 h-4 md:h-5 bg-black"></div>
            <div className="absolute mt-1.5 md:mt-2 top-0 right-0 w-1 md:w-2 h-4 md:h-5 bg-primary-green"></div>
          </div>
        </div>
        <div className="mt-12 flex-start flex-wrap">
          <div className="w-1/2 md:w-1/3 lg:w-1/5 flex-center">
            <img
              src="/assets/images/clip-crow.png"
              alt="clip-crow"
              className="w-2/3 md:w-auto h-auto"
            />
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/5 flex-center">
            <img
              src="/assets/images/nemophila.png"
              alt="nemophila"
              className="w-2/3 md:w-auto h-auto"
            />
          </div>
          <div className="w-1/2 md:w-1/5 lg:w-1/5 flex-center">
            <img
              src="/assets/images/bnb.png"
              alt="bnb"
              className="w-2/3 md:w-auto h-auto"
            />
          </div>
          <div className="w-1/2 md:w-1/5 lg:w-1/5 flex-center">
            <img
              src="/assets/images/isso.png"
              alt="isso"
              className="w-2/3 md:w-auto h-auto"
            />
          </div>
          <div className="w-1/2 md:w-1/5 lg:w-1/5 flex-center">
            <img
              src="/assets/images/ad-box.png"
              alt="ad-box"
              className="w-2/3 md:w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingWith;
