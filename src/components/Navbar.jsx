import React from "react";
import { NavLink, Link } from "react-router-dom";
import Utilities from './Navbar/Utilities'
const Navbar = () => {
  return (
    <div className="w-screen border-b-2 shadow-md border-gray-100 pb-5 text-xl">
      <div className=" mx-auto my-5 px-4 sm:px-6 ">
        <div className="flex flex-wrap py-6 justify-evenly lg:justify-between gap-y-4">
          <input
            className="hidden lg:block leading-none outline-none border-b-2 hover:border-b-3 border-red-800 w-1/4"
            type="text"
            placeholder=" Search.."

          />
          <Title visibility={true}>AisModa.</Title>     
          <Utilities/>
          <Title visibility={false}>AisModa.</Title>
        </div>
      </div>
      <nav className="flex justify-center my-3">
        <div>
          <NavLink
            to="MarketPlace_AisModa/cart"
            href="#"
            className="mx-8 text-base  text-gray-500 hover:text-red-900"
          >
            {" "}
            Cart{" "}
          </NavLink>
          <a href="#" className="mx-8 text-base  text-gray-500 hover:text-red-900">
            {" "}
            Docs{" "}
          </a>
          <a href="#" className="mx-8 text-base  text-gray-500 hover:text-red-900">
            {" "}
            Docs{" "}
          </a>
          <a href="#" className="mx-8 text-base  text-gray-500 hover:text-red-900">
            {" "}
            Docs{" "}
          </a>
          <a href="#" className="mx-8 text-base  text-gray-500 hover:text-red-900">
            {" "}
            Docs{" "}
          </a>
          <a href="#" className="mx-8 text-base  text-gray-500 hover:text-red-900">
            {" "}
            Docs{" "}
          </a>
        </div>
      </nav>
    </div>
  );
};

const Title = ({ children , visibility}) =>{
return(
  <div className={`${visibility?"hidden lg:flex":"lg:hidden"} justify-center `}>
      <Link to="MarketPlace_AisModa/">
        <span className="whitespace-nowrap text-4xl lg:text-5xl italic font-light text-red-700 hover:text-gray-900">
          { children }
        </span>
      </Link>
    </div>
);
}

export default Navbar;
