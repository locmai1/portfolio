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
    <a className='flex flex-row underline w-1/4  text-[#787774] justify-center' href={to}>
      <Emoji symbol={icon} label={label} size='lg' />
      <span className='text-base ml-1 leading-7'>{shortcut}</span>
    </a>
  )
}

export default Link;
