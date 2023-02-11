import React from 'react';
import Emoji from './Emoji';

type LinkProps = {
  icon: string;
  label: string;
  to: string;
  shortcut: string;
}

const Link = ({
  icon,
  label,
  to,
  shortcut
}: LinkProps) => {
  return (
      <div className='flex flex-row underline w-1/4 text-[#787774] justify-center'>
        <Emoji symbol={icon} label={label} size='lg' />
        <a className='ml-1 leading-7' href={to}>{shortcut}</a>
      </div>
  )
}

export default Link;
