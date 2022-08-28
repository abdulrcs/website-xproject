import { Stack } from '@chakra-ui/react';
import React from 'react';
import SlideUpWhenVisible from './SlideUpWhenVisible';

const Content = ({ children, spacing, pt, disableAnimation }) => {
  if (!disableAnimation) {
    return (
      <SlideUpWhenVisible>
        <Stack pt={pt} spacing={0} background='black' position='relative'>
          {children}
        </Stack>
      </SlideUpWhenVisible>
    );
  } else {
    return (
      <Stack pt={pt} spacing={0} background='black' position='relative'>
        {children}
      </Stack>
    );
  }
};

export default Content;
