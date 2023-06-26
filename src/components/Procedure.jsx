import React from "react";
import home from "../assets/home.jpg";
import restaurant from "../assets/restaurant.jpg";
import cart from "../assets/cart.jpg";
import payment from "../assets/payment.jpg";
import processing from "../assets/processing.png";
import rider from "../assets/rider.jpg";

const Procedure = () => {
  return (
    <section className="flex-1 w-full flex flex-col items-center bg-slate-50 pt-10 pb-32 px-2 md:px-5 lg:px-5">
      {/* <h1 className="text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl">
        Order Procedure
      </h1> */}
      <h1 className="hidden md:block lg:block text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl ">
        Order Procedure
      </h1>
      <h1 className=" block md:hidden lg:hidden text-4xl font-bold my-2 text-center wrap  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ">
        Order Procedure
      </h1>
      <p className="mt-10 mb-2 max-w-[300px] flex justify-center text-center">
        Here is a quick demo about the process of taking an order
      </p>
      <div className="flex gap-20 max-w-9xl flex-wrap justify-center  my-10">
        <div className="relative rounded-full h-96 w-48 ">
          <img src={home} alt="login" className="rounded-2xl" />
          <div className="absolute font-bold -bottom-16 left-1/2 -translate-x-1/2  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Home
          </div>
        </div>
        <div className=" relative rounded-full h-96 w-48 ">
          <img src={restaurant} alt="login" className="rounded-2xl" />
          <div className="absolute font-bold -bottom-16 left-1/2 -translate-x-1/2  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Restaurant
          </div>
        </div>
        <div className="relative rounded-full h-96 w-48 ">
          <img src={cart} alt="login" className="rounded-2xl" />
          <div className="absolute font-bold -bottom-16 left-1/2 -translate-x-1/2  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Cart
          </div>
        </div>
        <div className="relative rounded-full h-96 w-48 ">
          <img src={payment} alt="login" className="rounded-2xl" />
          <div className="absolute font-bold -bottom-16 left-1/2 -translate-x-1/2  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Payment
          </div>
        </div>
        <div className="relative rounded-full h-96 w-48 ">
          <img src={processing} alt="login" className="rounded-2xl" />
          <div className="absolute font-bold -bottom-16 left-1/2 -translate-x-1/2  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Processing
          </div>
        </div>

        <div className="relative rounded-full h-96 w-48 ">
          <img src={rider} alt="login" className="rounded-2xl" />
          <div className="absolute font-bold -bottom-16 left-1/2 -translate-x-1/2  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Rider
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedure;
