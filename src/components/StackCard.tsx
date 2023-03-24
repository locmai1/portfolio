import React from "react";

type StackCardProps = {
  icon: string;
  caption: string;
  size: number;
}

const StackCard = ({
  icon,
  caption,
  size
}: StackCardProps) => {
  return (
    <div className="drop-shadow-[0_0_3px_rgba(0,0,0,0.25)] w-[120px] h-[120px] md:w-full md:h-full rounded-2xl bg-[#ffffff] flex items-center justify-center m-auto">
      <img src={icon} 
        width={size}
        height={size}
        alt={caption}
      />
      <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-end justify-center items-end text-sm pb-1.5 md:pb-1 text-black font-semibold">
        {caption}
      </div>     
    </div>
  )
}

export default StackCard;
