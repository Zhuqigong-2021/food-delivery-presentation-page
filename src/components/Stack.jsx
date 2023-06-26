import React from "react";
import react from "../assets/React-icon.svg.png";
import redux from "../assets/redux.svg";
import graphql from "../assets/GraphQL.svg";
import firebase from "../assets/firebase.svg";
import sanity from "../assets/sanity.png";
import stripe from "../assets/stripe.svg";
import express from "../assets/express.png";

const Stack = () => {
  return (
    <section className="flex-1 w-full flex flex-col items-center bg-slate-50 pt-10 pb-32 px-2 md:px-5 lg:px-5">
      {/* <h1 className="text-7xl font-bold my-10 text-center wrap  shadow_text">
        Stack
      </h1> */}
      <h1 className="hidden md:block lg:block text-4xl font-bold my-10 text-center wrap  shadow_text md:text-7xl lg:text-7xl ">
        Stack
      </h1>
      <h1 className=" block md:hidden lg:hidden text-4xl font-bold my-2 text-center wrap  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ">
        Stack
      </h1>
      <p className="mt-10 mb-2 max-w-[300px] flex justify-center text-center">
        Stack that we use in this react native fullstack mobile app
      </p>
      <div className="flex gap-20 max-w-4xl flex-wrap justify-center  my-10">
        <div className="relative h-36 w-36 p-5   rounded-full bg-white shadow-lg shadow-slate-300 text-center flex justify-center items-center ">
          <img src={react} alt="react_native" className="" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-base font-semibold  ">
            React native
          </div>
        </div>

        <div className="relative h-36 w-36 p-5   rounded-full bg-white shadow-lg shadow-slate-300 text-center flex justify-center items-center">
          <img src={redux} alt="redux" className="h-20 w-20" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-base font-semibold  ">
            Redux
          </div>
        </div>

        <div className="relative h-36 w-36 p-5   rounded-full bg-white shadow-lg shadow-slate-300 text-center">
          <img src={graphql} alt="graphql" className=" " />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full  text-base font-semibold  ">
            GraphQL
          </div>
        </div>

        <div className="relative h-36 w-36 p-5  rounded-full bg-white shadow-lg shadow-slate-300 text-center">
          <img src={firebase} alt="firebase" className=" " />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-base font-semibold   ">
            Firebase
          </div>
        </div>

        <div className="relative h-36 w-36 p-5  bg-transparent rounded-full bg-white shadow-lg shadow-slate-300 text-center">
          <img src={sanity} alt="sanity" className=" rounded-full" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-base font-semibold  ">
            Sanity
          </div>
        </div>

        <div className="relative h-36 w-36 p-5   rounded-full bg-white shadow-lg shadow-slate-300 text-center flex justify-center items-center">
          <img src={stripe} alt="stripe" className="h-20 w-20 " />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-base font-semibold   ">
            Stripe
          </div>
        </div>

        <div className="relative h-36 w-36 p-5   rounded-full bg-white shadow-lg shadow-slate-300 text-center ">
          <img src={express} alt="express" className="bg-white" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-base font-semibold  ">
            Express
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
