import React from "react";
import cartempty from "../assets/cartempty.jpg";
import cart from "../assets/cart.jpg";

const Cart = () => {
  return (
    <section className="flex-1 w-full flex flex-col items-center bg-white pt-10 pb-32">
      {/* <h1 className="text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl">
        Cart Screen
      </h1> */}
      <h1 className="hidden md:block lg:block text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl ">
        Cart Screen
      </h1>
      <h1 className=" block md:hidden lg:hidden text-4xl font-bold my-2 text-center wrap  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ">
        Cart Screen
      </h1>
      <p className="mt-10 mb-12 max-w-[400px] flex justify-center text-center">
        Centralize our app cart state using Redux toolkit
      </p>
      {/* mt-10 md:flex-row lg:flex-row space-x-0 md:space-x-10 lg:space-x-10
      space-y-10 md:space-y-0 lg:space-y-0 */}
      <div className="flex flex-col-reverse lg:flex-row  md:flex-row space-y-10 space-y-reverse md:space-y-0 lg:space-y-0 text-center md:text-left lg:text-left space-x-0 md:space-x-20 lg:space-x-32 items-center px-4">
        <div className="flex flex-col md:flex-row lg:flex-row items-center space-x-0 md:space-x-10 lg:space-x-10  space-y-10 md:space-y-0 lg:space-y-0 ">
          <div className="rounded-full h-96 w-48 ">
            <img src={cartempty} alt="register" className="rounded-2xl" />
          </div>
          <div className="rounded-full h-96 w-48 ">
            <img src={cart} alt="login" className="rounded-2xl" />
          </div>
        </div>

        <div className="">
          <h1 className="lead font-bold text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-16">
            Cart management
          </h1>
          <ul className="text-left space-y-6 list-disc">
            <li>
              Conditionally render the cart tab screen based on current status.
            </li>
            <li>Can remove dishes from the cart till it’s empty;</li>
            <li>
              Redirect user to the home screen when there is nothing in the cart
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cart;
