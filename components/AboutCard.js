import { Button, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const AboutCard = ({ title, desc, link, img, pb }) => {
  const router = useRouter();
  return (
    <HStack spacing='48px' alignItems='center' justifyContent='center' pb={pb}>
      <Image src={img} alt={title} w='30%' h='30%' zIndex={99} />
      <Stack spacing='30px' w='40%'>
        <Heading variant='primary' zIndex={99}>
          {title}
        </Heading>
        <Text zIndex={99}>{desc}</Text>
        {link && (
          <Button
            zIndex={99}
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
