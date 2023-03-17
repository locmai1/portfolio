import React from 'react'
import StackCard from './StackCard'

const Stack = () => {
  return (
    <div className='grid grid-cols-5 grid-rows-3 w-full h-[500px] items-center justify-center'>
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'}
        caption={'React'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'}
        caption={'Javascript'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'}
        caption={'Typescript'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'}
        caption={'TailwindCSS'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg'}
        caption={'NextJS'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'}
        caption={'NodeJS'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'}
        caption={'Express'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'}
        caption={'MongoDB'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'}
        caption={'Python'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'}
        caption={'C++'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'}
        caption={'HTML'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'}
        caption={'CSS'}
        size={80}
      />
      <StackCard 
        icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'}
        caption={'GitHub'}
        size={80}
      />
    </div>
  )
}

export default Stack
