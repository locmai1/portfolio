import React from "react";
import Callout from '../components/Callout';
import Title from '../components/Title';

const Header = () => {
  return (
    <div className="">
      <Title
        icon='icons/1.png' 
        title='Loc Mai' 
      />
      <Callout 
        icon='⚠️' 
        label='icon-alert' 
        status="seeking front-end & software engineering internships for summer 2023!" 
      />
    </div>
  )
}

export default Header;
