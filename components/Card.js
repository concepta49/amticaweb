import { HiChevronRight } from "react-icons/hi";


export default function Card({title,description,image}) {
  return (
    
      <div className="items-center  md:items-start bg-white max-w-[1340px] p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <div className="text-left ">
                <image className="" src={image} />
                <h1 className="mt-3 font-bold text-[#0F172A] lg:text-[22px] text-lg">
                  {title}
                </h1>
                <p className="mt-1 text-[#0F172A]">
                {description}
                </p>
              </div>

          <div className="mt-2  flex justify-end">
                <HiChevronRight color="#84CC16" size={30}/>
              </div>
            </div>
    
  )
}
