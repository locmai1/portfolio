import React from 'react';
import Emoji from './Emoji';

type CalloutProps = {
  emoji: string;
  label: string;
  status: string;
}

const Callout = ({
  emoji,
  label,
  status
}: CalloutProps) => {
  return (
    <div className='flex flex-row w-full bg-[#f1f1ef] whitespace-pre-wrap p-4 rounded m-5'>
      <Emoji symbol={emoji} label={label} size='2xl'/>
      <div className='h-full w-full leading-8 text-lg ml-3'>
        <span className='font-bold'>Current Status: </span>
        <span className=''>{status}</span>
      </div>
    </div>
  )
}

export default Callout;
