import React from "react";
import account from "../assets/account.png";
import code from "../assets/code.jpg";

const Account = () => {
  return (
    <section className="flex-1 w-full flex flex-col items-center bg-slate-50 pt-10 pb-32">
      <h1 className="hidden md:block lg:block text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl mb-32">
        Account Screen
      </h1>
      <h1 className=" block md:hidden lg:hidden text-4xl font-bold my-10 text-center wrap  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-16">
        Account Screen
      </h1>

      <div className="flex flex-col lg:flex-row  md:flex-row space-y-10 md:space-y-0 lg:space-y-0 text-center md:text-left lg:text-left space-x-0 md:space-x-20 lg:space-x-32 items-center px-4">
        <div className="">
          <h1 className="lead font-bold text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-16">
            Account management
          </h1>
          <ul className="text-left space-y-6 list-disc">
            <li>Check the current favorite dishes</li>
            <li>Check current orders/ order histories</li>
            <li>Accumulate points by each order</li>
            <li>Change user interface theme</li>
            <li>Provide friend invitation code</li>
            <li>Sign out current user account</li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row items-center space-x-0 md:space-x-10 lg:space-x-10  space-y-20 md:space-y-0 lg:space-y-0">
          <div className="relative rounded-full h-96 w-48 ">
            <img src={account} alt="search" className="rounded-2xl" />
            <div className="absolute font-bold -bottom-16 left-1/2 -translate-x-1/2  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent w-full text-center">
              theme
            </div>
          </div>
          <div className="relative rounded-full h-96 w-48 ">
            <img src={code} alt="searchafter" className="rounded-2xl" />
            <div className="absolute font-bold -bottom-16 left-1/2 -translate-x-1/2  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              code
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
