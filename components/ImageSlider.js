/* eslint-disable react/jsx-key */
import { Carousel } from '3d-react-carousal';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ImageSlider = ({ title, subtitle, slides }) => (
  <>
    <VStack align='center'>
      <Heading variant='primary' fontSize='48px'>
        {title}
      </Heading>
      <Text variant='subtitle'>{subtitle}</Text>
      <Box pt='24px' />
    </VStack>
    <Carousel slides={slides} />
  </>
);

export default ImageSlider;
