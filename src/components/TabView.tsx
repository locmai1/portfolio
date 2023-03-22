import React, { useState } from 'react'
import Emoji from './Emoji';

type TabProps = {
  icon: string;
  label: string;
  name: string;
  content: JSX.Element;
}

type Tabs = {
  tabs: TabProps[];
}

const TabView = ({
  tabs
}: Tabs) => {
  // const [allTabs, setAllTabs] = useState(tabs)
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const activateTab = (index: number) => {
    setActiveTabIndex(index);
  }

  return (
    <div className='flex flex-col w-full mx-auto h-[700px]'>
      <div className='flex flex-row mx-auto mt-1'>
        {tabs.map((tab, index) => (
          <label className=''
            key={index}
            onClick={() => activateTab(index)}
          >
            <div className='hover:bg-[#eeeeee] text-[#787774] rounded-md cursor-pointer py-1 lg:py-2 px-2 lg:px-3 mx-2 lg:mx-3'>
              <Emoji symbol={tab.icon} label={tab.label} size='lg'/>
              <span className='ml-1 text-base lg:text-lg font-medium'>{tab.name}</span>
            </div>
            {index === activeTabIndex && 
              <hr className="h-[2px] mt-2 lg:mt-1 mx-2 lg:mx-3 bg-[#787774] border-0 rounded-full" />
            }
          </label>
        ))}
      </div>
      <div className='w-full h-full mx-auto'>
        <hr className="h-px my-5 bg-[#787774] border-0 block" />
        {tabs[activeTabIndex].content}
      </div>
    </div>
  )
}

export default TabView;
