import React from "react";
import order from "../assets/order.jpg";

const Order = () => {
  return (
    <section className="flex-1 w-full flex flex-col items-center bg-slate-50 pt-10 pb-32">
      {/* <h1 className="text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl mb-32">
        Order Screen
      </h1> */}
      <h1 className="hidden md:block lg:block text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl mb-32">
        Order Screen
      </h1>
      <h1 className=" block md:hidden lg:hidden text-4xl font-bold my-10 text-center wrap  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-16">
        Order Screen
      </h1>

      <div className="flex flex-col lg:flex-row  md:flex-row space-y-10 md:space-y-0 lg:space-y-0 text-center md:text-left lg:text-left space-x-0 md:space-x-20 lg:space-x-32 items-center px-4">
        <div className="">
          <h1 className="lead font-bold text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-16">
            Order management
          </h1>
          <ul className="text-left space-y-6 list-disc">
            <li>To trace the previous completed orders and reorder them</li>

            <li>Cancel current order within a time limit</li>
            <li>Check order history</li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row items-center space-x-0 md:space-x-10 lg:space-x-10  space-y-20 md:space-y-0 lg:space-y-0">
          <div className="rounded-full h-96 w-48 ">
            <img src={order} alt="search" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
