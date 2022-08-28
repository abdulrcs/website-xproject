import { Box, Heading, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';

const Media = ({ title, images }) => {
  return (
    <VStack spacing={10} zIndex={2}>
      <Heading variant='primary' fontSize='72px'>
        {title}
      </Heading>
      <Box
        borderRadius={41}
        border='5px solid #4CC015'
        width='75%'
        padding={10}
        height={images ? 'auto' : '500px'}
      >
        <SimpleGrid columns={3} spacing={10}>
          {images?.map((image) => (
            <Image src={image} alt={image} key={image} borderRadius='30px' />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default Media;
