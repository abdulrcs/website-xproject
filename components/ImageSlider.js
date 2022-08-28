/* eslint-disable react/jsx-key */
import { Carousel } from '3d-react-carousal';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ImageSlider = ({ slides }) => (
  <>
    <VStack align='center'>
      <Heading variant='primary' fontSize='48px'>
        Informatics Championship
      </Heading>
      <Text variant='subtitle'>Informatics Technology Championship</Text>
      <Box pt='24px' />
    </VStack>
    <Carousel slides={slides} />
  </>
);

export default ImageSlider;
