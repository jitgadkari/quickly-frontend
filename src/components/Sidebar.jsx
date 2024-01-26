import React from "react";
import logo from "../assets/g.jpeg";
import { IoSettings } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { SlLogout } from "react-icons/sl";
import SideBarExtension from "./SideBarExtension";


export default function Sidebar() {
  return (
    <>
        <section className="w-[140px] bg-[#042C71] h-full fixed left-0 top-0 flex flex-col text-white text-center">
          <div className=" bg-blue-900 w-full">
            <img src={logo} alt="" className="bg-blend-multiply " />
          </div>
          <div className="  w-full  py-8 ">
            <IoSettings className="text-4xl mx-auto " />
            <h3 className="font-semibold pt-2 ">SETTINGS</h3>
          </div>
          <div className=" bg-[#D9E4FC] text-black w-full  py-8 ">
            <TfiEmail className="text-4xl mx-auto" />
            <h3 className="font-semibold pt-2">UPDATES</h3>
          </div>
          <div className=" hover:bg-[#D9E4FC] w-full  py-8">
            <SlLogout className="text-4xl mx-auto" />
            <h3 className="font-semibold pt-2 ">LOGOUT</h3>
          </div>
        </section>
        <SideBarExtension/>
   
    </>
  );
}
