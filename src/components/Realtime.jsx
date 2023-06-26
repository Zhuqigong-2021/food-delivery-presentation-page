import React from "react";
import update from "../assets/update.png";
import order from "../assets/order.jpg";

const Realtime = () => {
  return (
    <section className="flex-1 w-full flex flex-col items-center bg-white pt-10 pb-32">
      <h1 className="hidden md:block lg:block text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl mb-32">
        Real-time updates
      </h1>
      <h1 className=" block md:hidden lg:hidden text-4xl font-bold my-10 text-center wrap  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-16">
        Real-time updates
      </h1>

      <div className="flex flex-col-reverse lg:flex-row  md:flex-row space-y-10 space-y-reverse md:space-y-0 lg:space-y-0 text-center md:text-left lg:text-left space-x-0 md:space-x-20 lg:space-x-32 items-center px-4">
        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center space-x-0 md:space-x-10 lg:space-x-10  space-y-10 md:space-y-0 lg:space-y-0 ">
          <div className="rounded-full h-96 w-48  ">
            <img src={order} alt="register" className="rounded-2xl" />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start lg:items-start ">
          <div className="rounded-full mb-20 ">
            <img src={update} alt="update" className="rounded-2xl" />
          </div>
          <ul className=" space-y-6 list-none md:list-disc lg:list-disc text-center md:text-left lg:text-left">
            <li>To commit any change without refreshing the whole page</li>
            <li>Get instant updates from user interface without any delay</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Realtime;
