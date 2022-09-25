import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const GuideCard = ({ title, img, desc, register, uploadKarya, guidebook }) => {
  const router = useRouter();
  const toast = useToast();
  const handleGuidebook = () => {
    if(guidebook) {
      router.push(guidebook);
    } else {
      toast({
        description: 'Coming soon!',
        status: 'info',
        isClosable: true,
      })
    }
  }
  const handleUploadKarya = () => {
    if(uploadKarya) {
      router.push(uploadKarya);
    } else {
      toast({
        description: 'Coming soon!',
        status: 'info',
        isClosable: true,
      })
    }
  }
  return (
    <VStack
      px={{
        base: '5vw',
        xl: '15vw',
      }}
    >
      <Heading
        fontSize={{ base: '36px', xl: '56px' }}
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
        align='start'
        justify='center'
      >
        <Image
          alignSelf='center'
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
          pt={24}
        >
          <Text
            w={{
              base: '100%',
              xl: '90%',
            }}
            textAlign={{
              base: 'center',
              xl: 'justify',
            }}
            style={{
              textJustify: 'inter-word',
            }}
          >
            {desc}
          </Text>
          <HStack spacing={4}>
            <Button variant='primary' onClick={() => router.push(register)}>
              DAFTAR
            </Button>
            <Button variant='secondary' onClick={handleUploadKarya}>
              Upload Karya
            </Button>
          </HStack>
          <Button variant='secondary' onClick={handleGuidebook}>
            GUIDEBOOK
          </Button>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default GuideCard;
