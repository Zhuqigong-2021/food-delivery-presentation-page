import React from "react";
import data from "../assets/data.jpg";

const Data = () => {
  return (
    <section className="flex-1 w-full flex flex-col items-center bg-white pt-10 pb-32 px-2 md:px-5 lg:px-5">
      <h1 className="hidden md:block lg:block text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl ">
        Data Storage
      </h1>
      <h1 className=" block md:hidden lg:hidden text-4xl font-bold my-2 text-center wrap  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ">
        Data Storage
      </h1>
      <p className="mt-10 mb-12 max-w-[400px] flex justify-center text-center">
        we use firestore to store all data related to user,here is our data
        structure
      </p>
      {/* mt-10 md:flex-row lg:flex-row space-x-0 md:space-x-10 lg:space-x-10
      space-y-10 md:space-y-0 lg:space-y-0 */}
      <div className="flex flex-col-reverse lg:flex-row  md:flex-row space-y-10 space-y-reverse md:space-y-0 lg:space-y-0 text-center md:text-left lg:text-left space-x-0 md:space-x-20 lg:space-x-32 items-center px-4">
        <div className="flex flex-col md:flex-row lg:flex-row items-center space-x-0 md:space-x-10 lg:space-x-10  space-y-10 md:space-y-0 lg:space-y-0 ">
          <div className="rounded-full ">
            <img src={data} alt="register" className="rounded-2xl" />
          </div>
        </div>

        <div className="">
          <h1 className="translate-x-0 md:-translate-x-4 lg:-translate-x-4 font-bold text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-16">
            Collections
          </h1>
          <ul className="text-center md:text-left lg:text-left space-y-6 list-none md:list-disc lg:list-disc">
            <li>Users</li>
            <li>Theme</li>
            <li>Orders</li>
            <li>LikedDishes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Data;
