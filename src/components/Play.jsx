import React from "react";

const Play = () => {
  return (
    <section className="flex-1 w-full flex flex-col items-center bg-slate-50 pt-10 pb-32">
      <h1 className="hidden md:block lg:block text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl mb-32">
        Play
      </h1>
      <h1 className=" block md:hidden lg:hidden text-4xl font-bold my-10 text-center wrap  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-16">
        Play
      </h1>

      <div className="flex flex-col-reverse lg:flex-row  md:flex-row space-y-10 space-y-reverse md:space-y-0 lg:space-y-0 text-center md:text-left lg:text-left space-x-0 md:space-x-20 lg:space-x-32 items-center px-4">
        <div className="flex flex-col md:flex-row lg:flex-row items-center space-x-0 md:space-x-10 lg:space-x-10  space-y-10 md:space-y-0 lg:space-y-0 bg-black p-4 h-20 w-20 rounded-full justify-center hover:opacity-100 opacity-90  shadow-slate-900 shadow-lg hover:shadow-sm transition-all">
          <a
            href="https://expo.dev/@phil2023/food_dilivery?serviceType=classic&distribution=expo-go"
            className="text-white"
            target="_blank"
          >
            Play
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start lg:items-start">
          {/* <div className="rounded-full h-24 w-24 mb-16 ">
            <img src={sanityIcon} alt="register" className="rounded-2xl" />
          </div> */}
          <ul className="space-y-6 md:list-disc lg:list-disc list-none">
            <li>Click the play button</li>
            <li>Download Expo-go app on your devices</li>
            <li>Scan the QR code or </li>
            <li>Visit the link</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Play;
