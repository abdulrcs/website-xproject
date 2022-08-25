import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <Box position='fixed' w='100%' zIndex='999'>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        px='120px'
        py='30px'
        color='white'
        transition='all 0.3s ease-in-out'
        bg={isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'}
      >
        <Text fontWeight='bold'>LOGO.</Text>
        <HStack
          spacing='40px'
          fontSize='20px'
          alignItems='center'
          justifyContent='center'
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
          <Link href='/championship'>
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
        <Button variant='primary'>Register</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
