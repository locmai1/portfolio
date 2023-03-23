import React from "react";
import Link from "../components/Link";

const Contact = () => {
  return (
    <div className="">
      <hr className="h-px my-5 bg-[#787774] border-0" />
      <div className='w-full flex flex-row lg:text-base text-sm'>
        <Link 
          icon='💼' 
          label='nav-linkedin' 
          to='https://www.linkedin.com/in/loc-mai-0b6469221/' 
          shortcut='LinkedIn'
        />
        <Link 
          icon='🧑🏻‍💻' 
          label='nav-github' 
          to='https://github.com/locmai1' 
          shortcut='GitHub' 
        />
        <Link 
          icon='📬' 
          label='nav-email' 
          to='mailto:locmai0315@gmail.com' 
          shortcut='Email'
        />
        <Link 
          icon='📜' 
          label='nav-resume' 
          to='https://portfolio-locmai1.vercel.app/' 
          shortcut='Resume' 
        />
      </div>
      <hr className="h-px my-5 bg-[#787774] border-0" />
    </div>
  )
}

export default Contact;
