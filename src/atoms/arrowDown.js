import Image from 'next/image';
import React from 'react';


export default function ArrowDown() {
  return (
    <Image
      id="image"
      alt="arrow"
      layout="fixed"
      width={15}
      height={15}
      src={'/images/arrowdown.png'}
    />
  );
}
