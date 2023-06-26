import React from "react";
import sanity from "../assets/sanity.jpg";
import sanityIcon from "../assets/sanity.png";

const Sanity = () => {
  return (
    <section className="flex-1 w-full flex flex-col items-center bg-slate-50 pt-10 pb-32 px-2 md:px-5 lg:px-5">
      <h1 className="hidden md:block lg:block text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl ">
        Sanity
      </h1>
      <h1 className=" block md:hidden lg:hidden text-4xl font-bold my-10 text-center wrap  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ">
        Sanity
      </h1>
      <p className=" mb-16 max-w-[400px] flex justify-center text-center">
        Sanity is a clound based content mangament studio
      </p>
      {/* mt-10 md:flex-row lg:flex-row space-x-0 md:space-x-10 lg:space-x-10
      space-y-10 md:space-y-0 lg:space-y-0 */}
      <div className="flex flex-col-reverse lg:flex-row  md:flex-row space-y-10 space-y-reverse md:space-y-0 lg:space-y-0 text-center md:text-left lg:text-left space-x-0 md:space-x-20 lg:space-x-32 items-center px-4">
        <div className="flex flex-col md:flex-row lg:flex-row items-center space-x-0 md:space-x-10 lg:space-x-10  space-y-10 md:space-y-0 lg:space-y-0 ">
          <div className="rounded-full max-w-[800px]">
            <img src={sanity} alt="register" className="rounded-2xl" />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start lg:items-start">
          <div className="rounded-full h-24 w-24 mb-16 ">
            <img src={sanityIcon} alt="register" className="rounded-2xl" />
          </div>
          <ul className="space-y-6 md:list-disc lg:list-disc list-none">
            <li className="max-w-[350px]">
              Flexible content management system (CMS).
            </li>
            <li className="max-w-[350px]">
              Real-time collaboration for efficient teamwork.
            </li>
            <li className="max-w-[350px]">
              Powerful querying capabilities for easy content retrieval and
              manipulation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sanity;
