import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Footer() {
  return (
    <section className="bg-white mt-8">
      <div className="px-3 max-w-[1740px] mx-auto mt-[75px] grid grid-cols-4 gap-y-6">
        <div className="col-span-4 lg:col-span-1">
          <h4 className="font-bold text-[#84CC16] text-[18px]">
            {" "}
            Best Sellers
          </h4>
          <div className="mt-3 flex flex-col space-y-[10px] font-medium text-[16px] text-[#0F172A]">
            <ul className="">
              <li className="mt-">
                <a href="/"> Nike shoes</a>
              </li>
              <li className="mt-2">
                <a href="/"> Adidass hoodie</a>
              </li>
              <li className="mt-2">
                <a href="/"> Long sleeve sweater</a>
              </li>
              <li className="mt-2">
                <a href="/"> Long sleeve sweater</a>
              </li>
              <li className="mt-2">
                <a href="/"> Strong stone helmet</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <h4 className="font-bold text-[#84CC16] text-[18px]">
            Popular Services
          </h4>
          <div className="mt-3 flex flex-col space-y-[10px] font-medium text-[16px] text-[#0F172A]">
            <ul className="">
              <li className="mt-">
                <a href="/"> Plumber</a>
              </li>
              <li className="mt-2">
                <a href="/"> Electrecian</a>
              </li>
              <li className="mt-2">
                <a href="/"> Welder</a>
              </li>
              <li className="mt-2">
                <a href="/"> Carpenter</a>
              </li>
              <li className="mt-2">
                <a href="/"> Cleaning</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <h4 className="font-bold text-[#84CC16] text-[18px]">Company</h4>
          <div className="mt-5 flex flex-col space-y-[10px] font-medium text-[16px]   text-[#0F172A]">
            <ul className="">
              <li className="mt-">
                <a href="/"> About us</a>
              </li>
              <li className="mt-2">
                <a href="/"> Faq</a>
              </li>
              <li className="mt-2">
                <a href="/"> Services</a>
              </li>
              <li className="mt-2">
                <a href="/"> Jobs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <img src="\images\logo.png" />
          <div className="mt-3 flex flex-col space-y-[10px] font-medium text-[18px] text-[#0F172A]">
            <p className="text-black mt-3 text-sm">
              Selfish fearful chaos war prejudice pinnacle free victorious
              spirit disgust superiority reason eternal-return suicide.
              <br /> Horror grandeur abstract of contradict ultimate insofar
              against strong sea free reason free play.
              <br />
              <a href="mailto:contact@gmail.com">contact@gmail.com</a>
            </p>
            <ul className="flex mt-4">
              <li className="p-2 bg-white shadow rounded  mx-1">
                <AiOutlineFacebook fontSize="28px" />
              </li>
              <li className="p-2 bg-white shadow rounded  mx-1">
                <a className="text-gray-500" href="">
                  <AiOutlineInstagram fontSize="28px" />
                </a>
              </li>
              <li className="p-2 bg-white shadow rounded  mx-1">
                <a className="text-gray-500" href="">
                  <AiOutlineLinkedin fontSize="28px" />
                </a>
              </li>
              <li className="p-2 bg-white shadow rounded  mx-1">
                <a className="text-gray-500" href="">
                  <AiFillTwitterCircle fontSize="28px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[90px] bg-[#9CA3AF]">
        <div className="max-w-[1140px] mx-auto py-4 text-black text-center font-medium">
          {" "}
          © 2021 All Rights Reserved to AMTICA LIMITED.
        </div>
      </div>
    </section>
  );
}
export default Footer;
