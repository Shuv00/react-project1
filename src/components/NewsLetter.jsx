import React from "react";

export default function NewsLetter() {
  return (
    <div className="w-full text-white py-16 px-2">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-xl md:text-2xl sm:text-3xl py-2 font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className=" ">
          <div className=" flex flex-col sm:flex-row md:justify-between md:items-center w-full">
            <input
              type="text"
              placeholder="Enter Email"
              className=" rounded-md text-black outline-none p-2"
            />
            <button className="md:ml-2 font-black rounded-lg py-2  my-2 mx-auto md:mx-0 w-[200px] bg-[#00df9a]">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
