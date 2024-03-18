import React from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
const Top = () => {
  return (
    <>
      <div className="flex justify-around">
        <h1 className="font-serif font-bold text-4xl mt-5 cursor-pointer">
          The Readers' Planet
        </h1>
        <div className="flex gap-2 p-4 ">
          <form className="">
          <div className=" bg-[#ca8146] p-3">
          <input
              type="text"
              name="username"
              placeholder="Username"
              className="mr-2 outline-none border-none p-0.5 rounded-sm"
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="outline-none border-none p-0.5 rounded-sm "
            />
          </div>
            <div className="flex gap-6 justify-center items-center m-2">
              <span className="text-white cursor-pointer">New user? Sign up</span>
              <span className="text-white cursor-pointer">Forget password?</span>
              <button
                type="submit"
                name="btn"
                className="bg-black text-white p-1 w-20 flex items-center justify-center gap-2 rounded-md"
              >
                Log in
                <span>
                  <FaArrowRightFromBracket />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Top;
