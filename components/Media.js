import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

const Media = ({ title }) => {
  return (
    <VStack spacing={10} zIndex={2}>
      <Heading variant='primary' fontSize='72px'>
        {title}
      </Heading>
      <Box
        borderRadius={41}
        border='5px solid #4CC015'
        width='75%'
        height='500px'
      ></Box>
    </VStack>
  );
};

export default Media;
