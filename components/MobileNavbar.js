import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Circle,
  Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons';

export default function MobileNavbar() {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position='fixed' zIndex={999} w='100%'>
      <Flex
        bg='rgba(0, 0, 0, 0.8)'
        color={'white'}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex flex={{ base: 1 }} ml={{ base: -2 }} display='flex'>
          <IconButton
            onClick={onToggle}
            icon={<Box color='white' className='fa fa-bars' />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            _focus={{ bg: 'none' }}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center' }} onClick={() => router.push('/')}>
          <Image src='assets/logo.png' w='72px' alt="logo"/>
        </Flex>

        <Stack
          flex={{ base: 1 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/competition'}
            color='white'
          >
            Register
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const MobileNav = () => {
  return (
    <Stack bg={'rgba(0, 0, 0, 0.8)'} p={4}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={'white'}>
          {label}
        </Text>
        {children && (
          <Icon
            as={Circle}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Championship',
    href: '/competition',
  },
  {
    label: 'Bootcamp',
    href: '/bootcamp',
  },
  {
    label: 'INACCO',
    href: '/inacco',
  },
];
