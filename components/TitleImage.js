import { Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

const TitleImage = ({ title, img, footer }) => {
  return (
    <Stack spacing={8} alignItems='center' justifyContent='center'>
      <Heading variant='primary' fontSize='72px'>
        {title}
      </Heading>
      <Image src={img} alt='innaco' w='30%' />
      <Heading variant='primary' fontSize='48px'>
        {footer}
      </Heading>
    </Stack>
  );
};

export default TitleImage;
