import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const HeroImage = () => {
  return (
    <Box
      backgroundImage='/assets/hero_image.png'
      w='100%'
      h='100vh'
      backgroundSize='cover'
      boxShadow='0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.7)'
      position='relative'
    >
      <Image
        src='/assets/green_top_left.png'
        alt='green gradient'
        position='absolute'
        zIndex='0'
      />
      <Stack
        spacing='30px'
        alignItems='center'
        justifyContent='center'
        h='100%'
      >
        <Heading variant='primary' fontSize='72px'>
          X-Project
        </Heading>
        <Text variant='subheading'>
          National Informatic Technology Championship
        </Text>
        <Button variant='primaryLong'>Let&apos;s go</Button>
        <Box mt='64px !important'>
          <Image src='/assets/arrow_down.png' alt='arrow down' />
        </Box>
      </Stack>
    </Box>
  );
};

export default HeroImage;
