import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <Box position='fixed' w='100%' zIndex='999'>
      <Flex
        bg={isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'}
        justifyContent='space-between'
        alignItems='center'
        px='120px'
        py='30px'
        color='white'
        transition='all 0.3s ease-in-out'
      >
        <Image src='https://res.cloudinary.com/adssad/image/upload/v1664071317/logo_ixwvt8.png' w='96px' alt="logo"/>
        <HStack
          spacing='40px'
          fontSize='20px'
          alignItems='center'
          justifyContent='center'
          ml='96px'
        >
          <Link href='/'>
            <a>
              <Text>Home</Text>
            </a>
          </Link>
          <Link href='/about'>
            <a>
              <Text>About</Text>
            </a>
          </Link>
          <Link href='/competition'>
            <a>
              <Text>Championship</Text>
            </a>
          </Link>
          <Link href='/bootcamp'>
            <a>
              <Text>Bootcamp</Text>
            </a>
          </Link>
          <Link href='/inacco'>
            <a>
              <Text>Inacco</Text>
            </a>
          </Link>
        </HStack>
        <Button variant='primary' onClick={() => router.push('/competition')}>Register</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
