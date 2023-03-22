import React from "react";

type StackTagProps = {
  name: string;
  text: string;
  background: string;
  width: number;
}

const StackTag = ({
  name,
  text,
  background,
  width
}: StackTagProps) => {
  return (
    <div 
      className={`h-full text-sm text-center rounded-sm mr-1`}
      style={{
        backgroundColor: `${background}`,
        color: `${text}`,
        width: `${width}px`,
      }}
    >
      {name}
    </div>
  )
}

export default StackTag
