import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import SlideUpWhenVisible from './SlideUpWhenVisible';

const AboutCard = ({ title, desc, link, img, pb }) => {
  const router = useRouter();
  return (
    <SlideUpWhenVisible>
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        spacing='48px'
        alignItems='center'
        justifyContent='center'
        pb={pb}
      >
        <Image
          w={{ base: '50%', lg: '25%' }}
          src={img}
          alt={title}
          zIndex={99}
        />
        <Stack
          w={{
            base: '80%',
            xl: '40%',
          }}
          spacing='30px'
        >
          <Heading
            textAlign={{ base: 'center', lg: 'left' }}
            variant='primary'
            zIndex={99}
          >
            {title}
          </Heading>
          <Text zIndex={99} textAlign={{ base: 'center', lg: 'left' }}>
            {desc}
          </Text>
          {link && (
            <Button
              zIndex={99}
              variant='primary'
              width={{
                base: '100%',
                xl: '50%',
              }}
              onClick={() => router.push(link)}
            >
              More Info
            </Button>
          )}
        </Stack>
      </Stack>
    </SlideUpWhenVisible>
  );
};

export default AboutCard;
