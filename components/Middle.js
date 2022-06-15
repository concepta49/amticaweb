import React from "react";
import { Col, Divider, Row } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

function Middle() {
  return (
    <div>
      <section className="bg-[#F3F4F6] py-[100px] pb-28 pt-28">
        <div className="max-w-[1240px] w-full mx-auto px-3 ">
          <h3 className="text-[#0F172A] font-bold lg:text-[36px]  text-center text-3xl ">
            Our Partner
          </h3>
          <div className="flex justify-center w-full mt-2">
            <hr className="border-1 bg-[#84CC16] border-[#84CC16] w-[103px]" />
          </div>

          <div className="mt-5 overflow-x-scroll lg:overflow-x-hidden flex items-center justify-between space-x-6">
            <img
              className="w-auto h-[75px]"
              src=" \images\Mask Group 5.png"
              alt="spotify"
            ></img>
            <img
              className="w-auto h-[75px]"
              src=" \images\Mask Group 6.png"
              alt="spotify"
            ></img>
            <img
              className="w-auto h-[75px]"
              src=" \images\Mask Group 9.png"
              alt="spotify"
            ></img>
            <img
              className="w-auto h-[75px]"
              src=" \images\Mask Group 8.png"
              alt="spotify"
            ></img>
            <img
              className="w-auto h-[75px]"
              src=" \images\Mask Group 10.png"
              alt="spotify"
            ></img>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F4F6] py-[100px] pb-28 lg:pt-20 w-full pt-12 ">
        <div className="lg:max-w-[1240px] max-w-[250px] mx-auto ">
          <div className="bg-[#84cc16] rounded-[20px] items-center lg:h-[400px] h-[300px]">
            <div className="mt-4  place-items-center">
              <h2 className="lg:text-4xl text-2xl pt-16 text-[#0F172A] text-center">
                Join us for future updates
              </h2>
             
              <div className="flex justify-center w-full mt-2">
                <hr className="border-1 bg-[white] border-[white] w-[103px]" />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 grid-col-2 mt-12 ml-4 mr-4 lg:ml-0 lg:mr-0 place-items-center">
              <div className="lg:col-span-2 lg:mt-4 w-full lg:w-3/5  md:items-center md:text-sm  bg-white rounded-lg lg:text-left  lg:text-lg text-center font-[Poppins] p-4 ">
                <h1 className="text-[#0F172A]  ">
                  Enter your email address
                </h1>
              </div>
              <div className="w-full mt-4 md:text-sm lg:w-2/5 ">
                <button className="bg-[#0F172A] rounded-lg p-4 w-full lg:w-full ">
                  <h1 className="text-white text-center text-sm lg:text-lg font-[Poppins] w-full ">
                    Subscribe
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
export default Middle;
