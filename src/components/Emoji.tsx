import React from "react";

type EmojiProps = {
  symbol: string;
  label: string;
  size: string;
}

const Emoji = ({
  symbol,
  label,
  size
}: EmojiProps) => {
  return (
    // <span className='text-2xl'
    <span className={`text-${size}`}
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  )
}

export default Emoji;
