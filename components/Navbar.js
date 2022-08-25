import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <Box position='fixed' w='100%' zIndex='2'>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        px='120px'
        pt='30px'
        color='white'
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
