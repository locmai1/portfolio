import React from "react";

type AboutProps = {
  icon: string;
}

const About = ({
  icon
}: AboutProps) => {
  return (
    <div className="flex flex-col justify-between w-full h-[350px] max-h-[350px]">
      <span className="text-5xl font-bold lg:my-7 my-3">About Me</span>
      <div className="flex flex-row h-full w-full justify-between my-auto">
        <div className="w-full lg:w-[600px] h-[280px] lg:h-full text-base lg:text-base my-3">
          <p className="mb-5">
            I am a currently a sophomore at Tufts University pursuing a Bachelors in Computer Science. 
            My interests at the moment lie in fullstack development and automation 
            but I’m open to explore other areas of computer science!
          </p>
          <p className="my-5">
            In my free time, I enjoy spending time with friends, playing video games, watching anime, and keeping up with basketball.
          </p>
          <p className="mt-5">
            Check out what I’ve done below!
          </p>
        </div>
        <img className="w-[200px] h-[200px] top-0 hidden lg:block" 
          src={icon} 
          alt='profile-icon' 
          width={200} 
          height={200}>
        </img>
      </div>
    </div>
  )
}

export default About;
