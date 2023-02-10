import React from "react";

type EmojiProps = {
  symbol: string;
  label: string;
}

const Emoji = ({
  symbol,
  label
}: EmojiProps) => {
  return (
    <span className='text-2xl'
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  )
}

export default Emoji;
