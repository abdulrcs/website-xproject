/* eslint-disable react/jsx-key */
import { Carousel } from '3d-react-carousal';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ImageSlider = ({ title, subtitle, slides }) => (
  <>
    <VStack align='center'>
      <Heading
        fontSize={{
          base: '36px',
          xl: '48px',
        }}
        variant='primary'
        textAlign='center'
      >
        {title}
      </Heading>
      <Text
        fontSize={{
          base: '12px',
          xl: '18px',
        }}
        textAlign='center'
      >
        {subtitle}
      </Text>
      <Box pt='24px' />
    </VStack>
    <Carousel slides={slides} />
  </>
);

export default ImageSlider;
