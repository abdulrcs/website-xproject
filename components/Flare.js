import { Image } from '@chakra-ui/react';
import React from 'react';

const Flare = ({ type, zIndex, top, bottom }) => {
  if (type === 'blue') {
    return (
      <Image
        src={`/assets/blue_right.png`}
        alt='flare'
        position='absolute'
        zIndex={zIndex}
        top={top}
        bottom={bottom ? bottom : '24'}
        right={0}
      />
    );
  } else if (type === 'green') {
    return (
      <Image
        src={`/assets/green_left.png`}
        alt='flare'
        position='absolute'
        zIndex={zIndex}
        top={top ? top : '24'}
        bottom={bottom}
      />
    );
  } else if (type === 'greenTopLeft') {
    return (
      <Image
        src='/assets/green_top_left.png'
        alt='green gradient'
        position='absolute'
        zIndex={zIndex}
        top={top}
        bottom={bottom}
      />
    );
  }
};

export default Flare;
