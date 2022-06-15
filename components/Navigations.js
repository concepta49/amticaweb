import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { Drawer } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

function Navigations() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleToggle = () => setIsNavExpanded(!isNavExpanded);

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          type: "group",
          label: "Group title",
          children: [
            {
              key: "1-1",
              label: "1st menu item",
            },
            {
              key: "1-2",
              label: "2nd menu item",
            },
          ],
        },
      ]}
    />
  );

  // console.log(isNavExpanded)

  return (
    <div>
      <section className="bg-[#0F172A] lg:mx-auto">
        <header className="relative max-w-[1740px] px-3 py-4 lg:p-2  lg:mx-auto flex justify-between items-center">
          <h1
            className="lg:text-5xl text-4xl md:text-3xl font-bold text-white font-[Raleway]"
            href="index.html"
          >
            a<span className="text-[#84cc16]">mtica</span>
          </h1>
          <nav className="flex justify-center">
            <ul className="hidden lg:flex justify-center text-[#9CA3AF]">
              <li className="mx-4 my-6 md:my-0">
                <a
                  href="#"
                  className="text-xl hover:text-[#84CC16] duration-500 text-[#9CA3AF]"
                >
                  SERVICES
                </a>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a
                  href="#"
                  className="text-xl hover:text-[#84CC16]duration-500 text-[#9CA3AF] hover:text-[#84CC16] duration-500"
                >
                  PRODUCTS
                </a>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a
                  href="#"
                  className="text-xl hover:text-[#84CC16] duration-500 text-[#9CA3AF]"
                >
                  JOBS
                </a>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a
                  href="#"
                  className="text-xl hover:text-[#84CC16] duration-500 text-[#9CA3AF]"
                >
                  ABOUT
                </a>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a
                  href="#"
                  className="text-xl hover:text-[#84CC16] duration-500 text-[#9CA3AF]"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:flex mp-4">
            <a
              href="#"
              className="text-xl mx-4 py-[9px] font-light mt-1 font-[Poppins] text-[#FFFFFF] hover:text-[#84CC16] duration-500"
            >
              LOG IN
            </a>
            <a
              className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[black] duration-500"
              href="#"
            >
              <button className="mr-10 py-[9px] px-[30px] bg-[#84CC16] border-[#84CC16] border-4 rounded-lg ">
                SIGN UP
              </button>
            </a>
          </div>
          

          <AiOutlineMenuFold
            size={30}
            color="white"
            onClick={handleToggle}
            className="lg:hidden"
          />
          <Drawer
           
            width="100%"
            visible={isNavExpanded}
            placement="right"
            onClose={handleToggle}
            extra={
              
             
             
          <img className=" justify-center" src="/images/logo.png"/>
              
            }
          >
            <div className="grid text-xl place-items-center ">
       
              <ul className="mt-4 lg:hidden font-bold text-gray-600">
                <li className="mt-1">
                  <a className="py-2" href="">
                    Home
                  </a>
                </li>
                <li className="mt-1">
                  <a className="py-2" href="">
                    About
                  </a>
                </li>
                <li className="mt-1">
                  <a className="py-2" href="">
                    Services
                  </a>
                </li>
                <li className="mt-1">
                  <a className="py-2" href="">
                    Portfolio
                  </a>
                </li>
                <li className="mt-1">
                  <a className="py-2" href="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </Drawer>
        </header>
      </section>

      <section className="relative flex w-full ">
        <div className="w-full relative h-[750px] lg:h-[540px] md:h-[540px] lg:text-center  text-left   ">
          <img
            src="\images\bg.png"
            className="h-[750px] lg:h-[540px] md:h-[540px] w-full object-cover  z-0"
          />
          <div className="absolute top-0 w-full bg-gradient-to-r from-[#3f3f46] to-[#3f3f4610]  h-[750px] lg:h-[540px] md:h-[540px]">
            <div className="max-w-3xl mx-auto ">
              <h1 className="text-[#FFFFFF] mt-20 font-bold text-[36px] lg:text-[50px] text-center ">
                Find a Service or Product at one shop
              </h1>
            </div>

            <div className="mt-20 max-w-[1340px] mx-auto items-center grid lg:grid-cols-3 grid-cols-1 lg:mt-6">
              <div className="lg:col-span-2 lg: lg:ml-20  md:items-center md:text-sm ml-4 mr-4 gap-3 ">
                <h1 className="text-[#0F172A] bg-white p-3 lg:p-4 rounded-lg lg:text-left text-center lg-px-[10px] px-[4px] lg:text-lg font-[Poppins] lg:pl-4">
                  Search a service or product....
                </h1>
              </div>
              <div className="lg:flex mx-auto lg;mt-4 mt-6 gap-3 w-full lg:ml-4 ">
                <div className="lg:flex mb-4 ml-4 mr-4 text-[#0F172A] bg-white lg:p-4 p-3 rounded-lg lg:text-left text-center px-[42px] lg:text-lg font-[Poppins] lg:pl-4">
                  <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        All departments
                        <IoChevronDownOutline color="#84CC16" size={25} />
                      </Space>
                    </a>
                  </Dropdown>
                </div>

                {/* <div className="flex lg:justify-end justify-end  ">
                    <IoChevronDownOutline color="#84CC16" size={30} />
                  </div> */}

                <div className="mt-6 lg:mt-0  ml-4 gap-3 mr-4 ">
                  <button className=" bg-[#84CC16] border-[#84CC16] lg:px-[32px] rounded-lg p-4 w-full ">
                    <h1 className="text-white text-center text-sm lg:text-lg font-[Poppins]">
                      Search
                    </h1>
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <p className="lg:mt-10 mt-20 lg:text-lg lg:pb-4 text-lg text-center  text-[#FFFFFF] ">
                Here companions instrument set estimating sex remarkably
                solicitude motionless. Property men
                <br />
                the why smallest graceful day insisted required. Inquiry justice
                country old placing sitting any
                <br />
                ten age instrument set estimating
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navigations;
