import { Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

const TitleImage = ({ title, img, footer }) => {
  return (
    <Stack spacing={8} alignItems='center' justifyContent='center'>
      <Heading variant='primary' fontSize='72px'>
        {title}
      </Heading>
      <Image
        w={{
          base: '60%',
          lg: '30%',
        }}
        src={img}
        alt='innaco'
      />
      <Heading variant='primary' fontSize='48px'>
        {footer}
      </Heading>
    </Stack>
  );
};

export default TitleImage;
