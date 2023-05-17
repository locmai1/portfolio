import React from "react";

type StackCardProps = {
  icon: string;
  caption: string;
  size: number;
};

const StackCard = ({ icon, caption, size }: StackCardProps) => {
  return (
    <div className="aspect-square drop-shadow-[0_0_3px_rgba(0,0,0,0.25)] w-full h-full rounded-2xl bg-[#ffffff] flex items-center justify-center m-auto">
      <img src={icon} width={size} height={size} alt={caption} />
      <div className="aspect-square opacity-0 hover:opacity-100 hover:backdrop-blur duration-400 absolute inset-0 z-10 flex justify-center items-center text-sm sm:text-md md:text-lg text-black font-semibold">
        {caption}
      </div>
    </div>
  );
};

export default StackCard;
