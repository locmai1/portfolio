import React from "react";
import WorkCard from "../components/WorkCard";

const Work = () => {
  return (
    <div className="grid grod-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 w-full h-[1300px] md:h-full gap-5 items-center justify-center">
      <WorkCard 
        logo="/logos/thelegacyproject.png"
        caption="logo-TiB"
        background="#8EA15C"
        position="The Legacy Project | Software Developer"
        date="Sep 2022 - Current"
        description="Collaborate with a team of 12 developers in an Agile environment to develop a Frontend application. Contribute to the development of core, reusable components using NextJS, TailwindCSS, and TypeScript, which are integrated into 70% of the application."
      />
      <WorkCard 
        logo="/logos/tetinboston.png"
        caption="logo-TiB"
        background="#da5e26"
        position="Tet in Boston | IT Staff"
        date="Sep 2022 - Jan 2023"
        description="Transitioned Tet in Boston website to WordPress. Conducted research on SEO, Google Analytics, and UI design principles to ensure adherence to industry standards. Demonstrated expertise in delivering and deploying content to live audience and sponsors, resulting in over 7,600 views and 3,600 visitors."
      />
      <WorkCard 
        logo="/logos/simplysmiles.png"
        caption="logo-simplysmiles"
        background="#7ac24f"
        position="SimplySmiles | Software Developer"
        date="Sep 2021 - May 2022"
        description="Collaborated with a 12-person Agile team to build a full-stack REST app. Developed a robust CRUD authentication system with NodeJS and MongoDB, which powered the entire backend. Created React modals, which were integrated into 90% of the frontend, delivering a seamless user experience."
      />
      <WorkCard 
        logo="/logos/putnam.png"
        caption="logo-putnam"
        background="#0173be"
        position="Putnam Investments | Desktop Engineering Intern"
        date="July 2020 - August 2020"
        description="Created documentation for installing corporate app on iOS devices. Developed and implemented Bash scripts to streamline distribution of PDF files and logging of network data across virtual machines."
      />
    </div>
  )
}

export default Work
