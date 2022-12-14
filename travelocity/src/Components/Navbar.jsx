// import { ReactNode } from 'react';
import {
    Box,
    Flex,
    // Avatar,
    HStack,
    Link,
    // IconButton,
    // Button,
    // Menu,
    // MenuButton,
    // MenuList,
    // MenuItem,
    // MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Espanol', 'Anuciar una propiedad', 'Atention al cliente', 'Mis viajes ', 'Inciar sesion'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color="white"
    textDecoration="none"
    
    _hover={{
      textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);
// , onOpen, onClose 
export default function Navbar() {
  const { isOpen} = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} mt="2px" bgColor="darkblue" pt ={15} pb={15} h={30} color="white">
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'} ml={80} mr={80} >
            <HStack>
                <RouterLink to="/">
                    <img src="https://www.travelocity.com/_dms/header/logo.svg?locale=es_MX&siteid=80001&2" alt="" />
                </RouterLink>
            </HStack>
            <HStack
                as={'nav'}
                spacing={20}
                display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          {/* </HStack> */}
                  </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}