import React from "react";
import TabView from "../components/TabView";
import Work from "./Work";
import Projects from "./Projects";
import Stack from "./Stack";

const Tabs = () => {
  return (
    <div className="">
      <hr className="h-px my-5 bg-[#787774] border-0" />
      <TabView tabs={[
        { 
          icon: '🤵🏻', 
          label: 'icon-work', 
          name: 'Work', 
          content: <Work />
        },
        { 
          icon: '📟', 
          label: 'icon-projects', 
          name: 'Projects', 
          content: <Projects />
        },
        { 
          icon: '📚', 
          label: 'icon-stack', 
          name: 'Stack', 
          content: <Stack />
        },
      ]} />
    </div>
  )
}

export default Tabs;
