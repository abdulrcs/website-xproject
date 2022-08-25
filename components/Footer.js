import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <HStack px='12vw' pb={8} alignItems='start' justifyContent='space-between'>
      <VStack w='30%' align='left' spacing={9}>
        <Heading variant='primary' fontSize='48px'>
          X-Project
        </Heading>
        <Text fontSize='12px'>
          X-Project merupakan sebuah kompetisi tingkat nasional di bidang
          Teknologi Informasi. Event ini bertujuan untuk mengeksplorasi dan
          mengedukasi publik mengenai berbagai macam elemen di bidang teknologi
          informasi.
        </Text>
        <HStack spacing={4}>
          <Image src='/assets/linkedinIcon.png' alt='linkedin' w='30px' />
          <Image src='/assets/instagramIcon.png' alt='instagram' w='30px' />
          <Image src='/assets/webIcon.png' alt='web' w='30px' />
        </HStack>
      </VStack>
      <VStack w='20%' align='left'>
        <Text variant='subheading'>Quick Links</Text>
        <Text>Informatics Championship</Text>
        <Text>INACCO</Text>
        <Text>Bootcamp</Text>
        <Text>About</Text>
      </VStack>
      <VStack w='20%' align='left'>
        <Text variant='subheading'>Contact</Text>
        <Text>himtiunesa@gmail.com</Text>
        <Text>+62812-3456-7890</Text>
      </VStack>
    </HStack>
  );
};

export default Footer;
