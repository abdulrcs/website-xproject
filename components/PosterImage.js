import {
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Link as ExternalLink,
} from '@chakra-ui/react';
import React from 'react';

const PosterImage = ({ title, img, register, guidebook }) => {
  return (
    <Stack spacing={8} alignItems='center' justifyContent='center'>
      <Heading variant='primary' fontSize='72px'>
        {title}
      </Heading>
      <HStack spacing={8}>
        <ExternalLink href={register} target='_blank' rel='noopener noreferrer'>
          <Button variant='primaryLong'>Daftar</Button>
        </ExternalLink>
        <ExternalLink
          href={guidebook}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button variant='primary'>Guidebook</Button>
        </ExternalLink>
      </HStack>
      <Stack
        align='center'
        borderRadius='40px'
        border='5px solid #4CC015'
        padding={{
          base: '20px',
          xl: '40px',
        }}
      >
        <Image
          w={{
            xl: '80%',
          }}
          src={img}
          alt={title}
          onClick={() => {
            window.open(img, '_blank');
          }}
        />
      </Stack>
    </Stack>
  );
};

export default PosterImage;
