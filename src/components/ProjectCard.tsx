import React from 'react'
import StackTag from './StackTag';

type ProjectCardProps = {
  title: string;
  description: string;
  stack: StackTagProps[];
}

type StackTagProps = {
  name: string;
  text: string;
  background: string;
  width: number;
}

const ProjectCard = ({
  title,
  description,
  stack
}: ProjectCardProps) => {
  return (
    <div className='drop-shadow-[0_0_3px_rgba(0,0,0,0.25)] flex flex-row rounded-2xl w-full h-full bg-white'>
      <div className='w-full h-full rounded-2xl p-8 flex flex-col'>
        <div className='h-[200px] md:h-[172px] w-full'>
          <div className='text-3xl font-bold'>
            {title}
          </div>
          <div className='mt-2 flex flex-row'>
            {stack.map((object, i) => (
              <StackTag name={stack[i].name} text={stack[i].text} background={stack[i].background} width={stack[i].width} />
            ))}
          </div>
          <div className='mt-3 text-[15px]'>
            {description}
          </div>
        </div>
        <div className='flex flex-row text-sm items-center h-[40px] w-full mt-3.5'>
          <button className='drop-shadow-[0_0_3px_rgba(0,0,0,0.25)] bg-white rounded-lg h-[40px] w-[40px] items-center flex'>
            <img className='m-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
              alt=''
              width={25}
              height={25}>
            </img> 
          </button>
          <button className='drop-shadow-[0_0_3px_rgba(0,0,0,0.25)] bg-white rounded-lg h-[40px] w-[100px] ml-[11px] text-[16px] font-semibold flex text-center'>
            <div className='text-center m-auto'>
              Demo
            </div>
          </button> 
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
