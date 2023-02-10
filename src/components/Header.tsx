import React from "react";
// import Emoji from "./Emoji";

type HeaderProps = {
  icon: string;
  title: string;
}

const Header = ({
  icon,
  title
}: HeaderProps) => {
  return (
    <div className="flex flex-col w-[181px] max-w-[900px] mt-[100px]">
      <div className="inline-block decoration-none align-text-bottom m-auto text-[3rem] mb-[1rem]">
        <img src={icon} alt="header-icon" width={150} height={150}></img>
      </div>
      <span className="font-bold font-poppins mt-0 mb-[0.75em] tracking-[-0.01em] leading-[1.2] text-5xl">
        {title}
      </span>
    </div>
  )
}

export default Header;
