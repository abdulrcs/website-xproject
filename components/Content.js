import { Image, Stack } from '@chakra-ui/react';
import React from 'react';

const Content = ({ children, spacing, pt }) => {
  return (
    <Stack pt={pt} spacing={0} background='black' position='relative'>
      {children}
    </Stack>
  );
};

export default Content;
