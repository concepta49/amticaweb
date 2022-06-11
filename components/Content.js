import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import Card from "./Card";

const data = [
  {
    title: "plumber",
    description:
      "  Looking venture justice in evident in totally he do ability.",
    image: "/images/first.png",
  },
  {
    title: "Electrician",
    description:
      "  Looking venture justice in evident in totally he do ability.",
    image: "/images/second.png",
  },
  {
    title: "Hair Dresser",
    description:
      "  Looking venture justice in evident in totally he do ability.",
    image: "/images/3rd.png",
  },
  {
    title: "Painter",
    description:
      "  Looking venture justice in evident in totally he do ability.",
    image: "/images/third.png",
  },
  {
    title: "Carpenter",
    description:
      "  Looking venture justice in evident in totally he do ability.",
    image: "/images/fourth.png",
  },
];

function Content() {
  return (
    <div>
      <section className="bg-[#F3F4F6] font-Poppins py-[100px] pb-28 pt-20">
        <div className="max-w-[1240px] w-full mx-auto p-6">
          <h3 className="text-[#0F172A] font-bold lg:text-[36px] text-xl text-center ">
            Pick the suitable solution
          </h3>
          <div className="flex justify-center w-full mt-2">
            <hr className="mt-2 border-1 bg-[#84CC16] border-[#84CC16] w-[103px]" />
          </div>
          <div className="mt-[52px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[26px] ">
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <div className="text-center">
                <a className=" text-[#84CC16] lg:text-[16px] text-sm">FIND</a>
                <h2 className="font-bold mt-2 lg:text-[24px] text-sm text-[#0F172A] ">
                  Services
                </h2>
                <p className="lg:text-[16px] mt-2 text-lg font-[Poppins] text-[#0F172A] pb-10">
                  Looking venture justice in evident in totally he do ability.
                  Be is lose girl long of up give.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
              <div className="text-center">
                <a className=" text-[#84CC16] lg:text-[16px] text-sm mt-2 ">
                  BUY & SELL
                </a>
                <h2 className="font-bold lg:text-[24px] text-lg text-[#0F172A] mt-2 ">
                  Products
                </h2>
                <p className="mt-2 lg:text-[16px] text-lg font-[Poppins] text-[#0F172A]">
                  Looking venture justice in evident in totally he do ability.
                  Be is lose girl long of up give.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center  md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out ">
              <div className="text-center">
                <a className=" text-[#84CC16] lg:text-[16px] text-sm mt-2">
                  POST
                </a>
                <h2 className="font-bold lg:text-[24px] text-sm text-[#0F172A] mt-2">
                  Jobs
                </h2>
                <p className="lg:text-[16px] text-lg font-[Poppins] text-[#0F172A] mt-2">
                  Looking venture justice in evident in totally he do ability.
                  Be is lose girl long of up give.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start bg-[#84CC16] w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <div className=" relativ mx-auto mt-4 text-lg lg:text-2xl text-center">
                <div className="max-w-3xl w-full mx-auto lg:mt-10  h-full">
                  <h1 className="text-[#FFFFFF] lg:text-[24px] text-lg ">
                    All{" "}
                  </h1>
                  <h1 className="text-[#FFFFFF] lg:text-[24px] text-lg lg:ml-4 ">
                    Solutions
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-[100px] w-full pb-28 pt-20">
        <div className="max-w-[1740px] w-full mx-auto px-3">
          <h3 className="text-[#0F172A] font-bold lg:text-[36px] text-xl text-center ">
            Most popular services
          </h3>
          <div className="flex justify-center w-full mt-2">
            <hr className="mt-2 border-1 bg-[#84CC16] border-[#84CC16] w-[103px]" />
          </div>
          <div className="mt-[52px] max-w-[1740px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[26px]  place-items-centrer">
            {data.map((item, key) => (
              <Card key={key} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-[100px] pb-28 pt-20">
        <div className="max-w-[1740px] w-full mx-auto px-3">
          <h3 className="text-[#0F172A] font-bold lg:text-[36px] text-xl text-center ">
            Best selling Products
          </h3>
          <div className="flex justify-center w-full mt-2">
            <hr className="mt-2 border-1 bg-[#84CC16] border-[#84CC16] w-[103px]" />
          </div>
          <div className="mt-[52px] items:left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[26px]">
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <img className="" src="\images\11.png" />
              <h1 className="mt-2 text-[#0F172A] text-center">Clothing & Accesories</h1>
              <h1 className="font-bold text-[#0F172A] lg:text-[24px] text-lg">
                Nike shoes
              </h1>

              <div className="flex gap-[6px] mt-2">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div> 
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center">
                Looking venture justice in evident in totally he do ability.
              </p>
              <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center lg:place-items-start w-full  mx-auto mt-2 text-[#84CC16]">
                <h2 className="text-lg text-[#84CC16] lg:text-left lg:text-2xl mt-2 p-2 text-center ">
                $ 120
                </h2>
                <button className="bg-[#84CC16] text-white rounded-lg lg:text-xl text-lg p-2 mt-2">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <img className="" src="\images\22.png" />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm lg:text-lg">Clothing & Accesories</h1>
              <h1 className="font-bold text-[#0F172A] lg:text-[24px] text-lg text-center ">
                Long sleeve hoo..
              </h1>
              <div className="flex text-[#FBBF24] gap-[6px] mt-2">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div>
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center">
                Looking venture justice in evident in totally he do ability.
              </p>
              <div className="grid lg:grid-cols-2 grid-cols-1  place-items-center lg:place-items-start w-full  mx-auto mt-2 text-[#84CC16]">
                <h2 className="text-lg text-[#84CC16] text-left lg:text-2xl mt-2 p-2">
                $ 90
                </h2>
                <button className="bg-[#84CC16] text-white rounded-lg lg:text-xl text-lg p-2 mt-2">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <img className="" src="\images\33.png" />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm lg:text-lg">Clothing & Accesories</h1>
              <h1 className="font-bold text-[#0F172A] lg:text-[24px] text-lg text-center ">
                Adidas cap
              </h1>
              <div className="flex text-[#FBBF24] gap-[6px] mt-2 ">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div>
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center">
                Looking venture justice in evident in totally he do ability.
              </p>
              <div className="grid lg:grid-cols-2 grid-cols-1  place-items-center lg:place-items-start w-full mt-2 mx-auto lg:mt-3 text-[#84CC16]">
                <h2 className="text-lg text-[#84CC16] text-left lg:text-2xl mt-2 p-2">
                $ 80.50
                </h2>
                <button className="bg-[#84CC16] text-white rounded-lg lg:text-xl text-lg p-2 mt-2">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <img className="" src="\images\44.png" />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm lg:text-lg">Clothing & Accesories</h1>

              <h1 className="font-bold text-[#0F172A] lg:text-[24px] text-lg text-center">
                Leather bag
              </h1>
              <div className="flex text-[#FBBF24] gap-[6px] lg:mt-2">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div> 
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center">
                Looking venture justice in evident in totally he do ability.
              </p>
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-3 place-items-center lg:place-items-start w-full  mx-auto mt-2 lg;mt-3 text-[#84CC16]">
                <h2 className="text-lg text-[#84CC16] text-left lg:text-2xl mt-2 p-2 ">
                $ 12.59
                </h2>
                <button className="bg-[#84CC16] text-white rounded-lg lg:text-xl text-lg p-2 mt-2 ">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <img className="" src="\images\55.png" />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm lg:text-lg">Clothing & Accesories</h1>
              <h1 className="font-bold text-[#0F172A] lg:text-[24px] text-lg text-center">
                Velvet slippers
              </h1>
              <div className="flex text-[#FBBF24] gap-[6px] lg:mt-2">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div>
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center">
                Looking venture justice in evident in totally he do ability.
              </p>
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:place-items-start  place-items-center w-full  mt-2 lg:mt-3 text-[#84CC16]">
                <h2 className="text-lg text-[#84CC16] lg:text-left lg:text-2xl mt-2 text-center p-2">
                  $ 50
                </h2>
                <button className="bg-[#84CC16] text-white rounded-lg lg:text-xl text-lg p-2 mt-2 ">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="bg-[#0F172A]">
          <div className=" mx-auto sm:px-28  ">
            <div className="flex flex-wrap h-full container mx-auto max-w-[1840px]">
              <div className="w-full  order-2 lg:order-1 lg:w-1/2  mt=4 ">
                <div className="ml-2 mr-2 lg:mt-16">
                  <h2 className="lg:text-[36px] text-2xl text-white font-bold text-center lg:text-left pt-16 lg:ml-20">
                    What we do at <span className="text-[#84CC16]">amtica</span>
                    ?
                  </h2>
                  <p className="mt-4 text-[#FFFFFF] lg:text-[16px] text-sm text-center w-full lg:text-justify lg:ml-20 h-58px font-[Poppins]">
                    Marvelous noble suicide disgust suicide. Will contradict
                    inexpedient battle ubermensch deceptions merciful merciful
                    ascetic. Disgust against christian superiority marvelous
                    strong burying virtues strong. Intentions hatred victorious
                    merciful aversion good holiest sea.
                  </p>
                  <br />
                  <p className="mt-4 text-[#FFFFFF] lg:text-[16px] text-sm text-center  md:text-center h-58px lg:ml-20 lg:text-justify">
                    Selfish fearful chaos war prejudice pinnacle free victorious
                    spirit disgust superiority reason eternal-return suicide.
                    Horror grandeur abstract of contradict ultimate insofar
                    against strong sea free reason free play. Endless justice
                    strong zarathustra noble disgust suicide convictions. Moral
                    prejudice ultimate
                  </p>
                  </div>
                  <div className="mt-4 lg:ml-20 lg:pb-5 pb-12 p-3">
                    <button className="mt-4 w-full py-[10px] lg:w-1/2 bg-[#84CC16] border-[#84CC16] border-4 lg:rounded-lg text-[#FFFFFF] lg:text-lg">
                      Learn More
                    </button>
                  </div>
                
              </div>
              <div className="flex mt-4 lg:mt-0 mx-auto   h-full order-1  lg:order-2 w-1/2   ">
                <img
                  className="h-full w-auto lg:w-full "
                  src="\images\happy-confident-customers-2021-09-04-15-44-24-utc.png"
                  alt="happy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Content;
