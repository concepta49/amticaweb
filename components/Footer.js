import Link from "next/link";
import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";

function Footer() {
  return (
    <section className="bg-white mt-8">
      <div className="px-3 max-w-[1740px] mx-auto mt-[75px] grid grid-cols-4 gap-y-6">
        <div className="col-span-4 lg:col-span-1">
          <h4 className="font-bold text-[#84CC16] text-[18px] text-left">
            Popular Services
          </h4>
          <div className="mt-3 flex flex-col space-y-[10px] font-medium text-[16px] text-[#0F172A]">
            <ul className="mt-3 justify-center  ">
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>Nike shoes</a>
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a> Adidass hoodie</a>
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>Long sleeve sweater</a>
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>Long sleeve sweater</a>
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>Strong stone helmet</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <h4 className="font-bold text-[#84CC16] text-[18px]">
            Popular Services
          </h4>
          <div className="mt-3 flex flex-col space-y-[10px] font-medium text-[16px] text-[#0F172A]">
            <ul className="mt-3 justify-center  ">
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>Plumber</a>
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>Welder</a>
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>Carpenter</a>
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>Cleaning</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <h4 className="font-bold text-[#84CC16] text-[18px]">Company</h4>
          <div className="mt-5 flex flex-col space-y-[10px] font-medium text-[16px]   text-[#0F172A]">
            <ul className=" justify-center  ">
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>About us</a>
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>Faq</a>
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>Services</a>
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link href="/">
                  <a>Jobs</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <Image
            src="/images/logo.png"
            alt="Picture of the author"
            width={150}
            height={30}
          />
          <div className="mt-3 flex flex-col space-y-[10px] font-medium text-[18px] text-[#0F172A]">
            <p className="text-black mt-3 text-sm">
              Selfish fearful chaos war prejudice pinnacle free victorious
              spirit disgust superiority reason eternal-return suicide.
              <br /> Horror grandeur abstract of contradict ultimate insofar
              against strong sea free reason free play.
              <ul className="flex mt-4">
                <li className="p-2 bg-white shadow rounded  mx-1">
                  <Link href="/">
                    <AiFillTwitterCircle fontSize="28px" />
                  </Link>
                </li>
                <li className="p-2 bg-white shadow rounded  mx-1">
                  <Link href="/">
                    <a className="text-gray-500" href="">
                      <AiOutlineFacebook fontSize="28px" />
                    </a>
                  </Link>
                </li>
                <li className="p-2 bg-white shadow rounded  mx-1">
                  <Link href="/">
                    <a className="text-gray-500" href="">
                      <AiOutlineInstagram fontSize="28px" />
                    </a>
                  </Link>
                </li>
                <li className="p-2 bg-white shadow rounded  mx-1">
                  <Link href="/">
                    <a className="text-gray-500" href="">
                      <AiFillLinkedin fontSize="28px" />
                    </a>
                  </Link>
                </li>
              </ul>
            </p>
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
