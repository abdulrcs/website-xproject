import {
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react'

const GuideCard = ({ title, img, desc, register, uploadData, guidebook }) => {
  const router = useRouter();
  const toast = useToast();
  const handleGuidebook = () => {
    if(guidebook) {
      window.open(guidebook, '_blank');
    } else {
      toast({
        description: 'Coming soon!',
        status: 'info',
        isClosable: true,
      })
    }
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleUploadKarya = () => {
    if(uploadData.length === 1 && uploadData[0].url !== '') {
      router.push(uploadData[0].url);
    }
    else if(uploadData[1]?.url) {
      onOpen()
    } else {
      toast({
        description: 'Coming soon!',
        status: 'info',
        isClosable: true,
      })
    }
  }
  return (
    <> 
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
    <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay/>
        <ModalContent borderColor="3px solid green" background='black' borderRadius={20}>
          <ModalBody color='white' padding={20}>
          <VStack spacing={5}>
            <Heading variant="primary" mb={20}>Upload Karya</Heading>
            {uploadData?.map(uploadUrl => (
              <Button key={uploadUrl.url} variant="secondary" width="100%" onClick={() => window.open(uploadUrl.url, '_blank')}>
                {uploadUrl.name}
              </Button>
            ))}
          </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GuideCard;
