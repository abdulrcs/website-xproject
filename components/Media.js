import { Box, Heading, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';

const Media = ({ title, images }) => {
  return (
    <VStack spacing={10} zIndex={2}>
      <Heading
        fontSize={{
          base: '36px',
          xl: '72px',
        }}
        variant='primary'
        textAlign='center'
      >
        {title}
      </Heading>
      <Box
        width='75%'
        height={images ? 'auto' : '500px'}
        borderRadius={41}
        padding={10}
        border='5px solid #4CC015'
      >
        <SimpleGrid
          columns={{
            base: 2,
            lg: 3,
            xl: 4,
          }}
          spacing={10}
          alignItems='center'
          justifyItems='center'
        >
          {images?.map((image) => (
          <Image src={image} alt={image} key={image} width="80%" />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default Media;
