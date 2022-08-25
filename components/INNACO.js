import { Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

const INNACO = () => {
  return (
    <Stack spacing={8} alignItems='center' justifyContent='center'>
      <Heading variant='primary' fontSize='72px'>
        INNACO
      </Heading>
      <Image src='/assets/innaco.png' alt='innaco' w='30%' />
    </Stack>
  );
};

export default INNACO;
