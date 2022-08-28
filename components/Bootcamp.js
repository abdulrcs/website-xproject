import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const Bootcamp = () => {
  const router = useRouter();
  return (
    <HStack
      spacing={8}
      alignItems='center'
      justifyContent='space-between'
      px='16vw'
      zIndex={2}
    >
      <VStack
        alignItems='right'
        spacing={3}
        pl={9}
        borderLeft='3px solid #4CC015'
      >
        <Text>What is</Text>
        <Heading variant='primary' fontSize='32px'>
          Bootcamp
        </Heading>
        <Text>
          Program pelatihan intensif untuk meningkatkan dan mengembangkan
          kemampuan dibidang teknologi informasi guna menciptakan lulusan yang
          siap kerja dengan waktu singkat.
        </Text>
        <Box>
          <Button
            mt={2}
            variant='primary'
            w='40%'
            onClick={() => router.push('/bootcamp')}
          >
            More Info
          </Button>
        </Box>
      </VStack>
      <Image src='/assets/bootcamp_vector.png' alt='bootcamp' w='50%' />
    </HStack>
  );
};

export default Bootcamp;
