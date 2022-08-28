import { Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const GuideCard = ({ title, img, desc, register, guidebook }) => {
  const router = useRouter();
  return (
    <VStack px='15vw'>
      <Heading variant='primary' fontSize='72px' py={4}>
        {title}
      </Heading>
      <HStack align='start'>
        <Image src={img} alt={title} w='40%' pl={24} />
        <VStack align='start' spacing={8} pt={16}>
          <Text w='70%'>{desc}</Text>
          <HStack spacing={8}>
            <Button variant='primary' onClick={() => router.push(register)}>
              DAFTAR
            </Button>
            <Button variant='primary' onClick={() => router.push(guidebook)}>
              GUIDEBOOK
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default GuideCard;
