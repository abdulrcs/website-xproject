import {
  Heading,
  HStack,
  Image,
  Link as ExternalLink,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <HStack
      px='12vw'
      pb={8}
      alignItems='start'
      justifyContent='space-between'
      zIndex={99}
    >
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
          <ExternalLink
            href='https://www.linkedin.com/company/himpunan-teknik-informatika-universitas-negeri-surabaya/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src='/assets/linkedinIcon.png' alt='linkedin' w='30px' />
          </ExternalLink>
          <ExternalLink
            href='https://www.instagram.com/xproject.if/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src='/assets/instagramIcon.png' alt='instagram' w='30px' />
          </ExternalLink>
          <ExternalLink href='/'>
            <Image src='/assets/webIcon.png' alt='web' w='30px' />
          </ExternalLink>
        </HStack>
      </VStack>
      <VStack w='20%' align='left'>
        <Text variant='subheading'>Quick Links</Text>
        <Link href='/competition'>
          <a>
            <Text>Informatics Championship</Text>
          </a>
        </Link>
        <Link href='/inacco'>
          <a>
            <Text>INACCO</Text>
          </a>
        </Link>
        <Link href='/bootcamp'>
          <a>
            <Text>Bootcamp</Text>
          </a>
        </Link>
        <Link href='/about'>
          <a>
            <Text>About</Text>
          </a>
        </Link>
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
