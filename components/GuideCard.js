import {
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const GuideCard = ({ title, img, desc, register, guidebook }) => {
  const router = useRouter();
  return (
    <VStack
      px={{
        base: '5vw',
        xl: '15vw',
      }}
    >
      <Heading
        fontSize={{ base: '36px', xl: '72px' }}
        variant='primary'
        py={4}
        textAlign='center'
      >
        {title}
      </Heading>
      <Stack
        direction={{
          base: 'column',
          xl: 'row',
        }}
        align='center'
        justify='center'
      >
        <Image
          w={{
            base: '60%',
            xl: '40%',
          }}
          pl={{
            xl: 24,
          }}
          src={img}
          alt={title}
        />
        <VStack
          align={{
            base: 'center',
            xl: 'start',
          }}
          pl={{
            xl: 8,
          }}
          spacing={4}
          pt={16}
        >
          <Text
            w={{
              base: '100%',
              xl: '70%',
            }}
            textAlign={{
              base: 'center',
              xl: 'left',
            }}
          >
            {desc}
          </Text>
          <HStack spacing={4}>
            <Button variant='primary' onClick={() => router.push(register)}>
              DAFTAR
            </Button>
            <Button variant='secondary' onClick={() => router.push(guidebook)}>
              Upload Karya
            </Button>
          </HStack>
          <HStack w="55%" justifyContent="center">
            <Button variant='secondary' onClick={() => router.push(guidebook)}>
              GUIDEBOOK
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default GuideCard;
