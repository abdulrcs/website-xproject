import { Button, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const AboutCard = ({ title, desc, link, img, pb }) => {
  const router = useRouter();
  return (
    <HStack
      spacing='48px'
      alignItems='center'
      justifyContent='center'
      zIndex='1'
      pb={pb}
    >
      <Image src={img} alt='maskot project' w='30%' h='30%' />
      <Stack spacing='30px' w='40%'>
        <Heading variant='primary'>{title}</Heading>
        <Text>{desc}</Text>
        {link && (
          <Button
            variant='primary'
            width='50%'
            onClick={() => router.push(link)}
          >
            More Info
          </Button>
        )}
      </Stack>
    </HStack>
  );
};

export default AboutCard;
