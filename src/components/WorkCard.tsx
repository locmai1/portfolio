import React from "react";

type WorkCardProps = {
  logo: string;
  caption: string;
  background: string;
  position: string;
  date: string;
  description: string;
}

const WorkCard = ({
  logo,
  caption,
  background,
  position,
  date,
  description
}: WorkCardProps) => {
  return (
    <div className="drop-shadow-[0_0_3px_rgba(0,0,0,0.25)] flex rounded-2xl w-full h-full bg-white flex-col">
      <div className="h-[290px] w-full">
        <div className="h-[60px] w-full relative">
          <div className={`w-full h-[60px] rounded-t-2xl justify-center items-center flex text-white text-sm font-semibold`}
            style={{backgroundColor: background}}
          >
            {/* Company Name */}
          </div>
          <img className="absolute drop-shadow-[0_0_6px_rgba(0,0,0,0.25)] rounded-full h-[60px] w-[60px] bg-white top-[30px] left-[170px] md:left-[180px]"
            src={`${logo}`}
            alt={`${caption}`}
            width={80}
            height={80}>
          </img>
        </div>
        <div className="flex flex-col w-full h-full pt-9">
          <span className="text-black font-semibold text-sm flex justify-center">
            {position}
          </span>
          <span className="text-black font-semibold text-sm flex justify-center">
            {date}
          </span>
          <span className="text-sm px-5 text-black pt-2">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
