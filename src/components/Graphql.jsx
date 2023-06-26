import React from "react";
import script from "../assets/script.jpg";

const Graphql = () => {
  return (
    <section className="flex-1 w-full flex flex-col items-center bg-white pt-10 pb-32 px-4 md:px-14 lg:px-20">
      <h1 className="hidden md:block lg:block text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl mb-32">
        GraphQL
      </h1>
      <h1 className=" block md:hidden lg:hidden text-4xl font-bold my-10 text-center wrap  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-16">
        GraphQL
      </h1>

      <div className="flex flex-col lg:flex-row  md:flex-row space-y-10 md:space-y-0 lg:space-y-0 text-center md:text-left lg:text-left space-x-0 md:space-x-20 lg:space-x-32 items-center px-4">
        <div className="">
          <h1 className="hidden md:block lg:block  lead font-bold text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-16">
            GraphQL
          </h1>

          <p className="max-w-[400px] text-left">
            GraphQL is a query language and runtime for APIs. It allows clients
            to request specific data, perform mutations for data modification,
            and receive real-time updates through subscriptions, resulting in
            efficient and flexible data interactions
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row items-center space-x-0 md:space-x-10 lg:space-x-10  space-y-20 md:space-y-0 lg:space-y-0">
          <div className="rounded-full ">
            <img src={script} alt="search" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graphql;
