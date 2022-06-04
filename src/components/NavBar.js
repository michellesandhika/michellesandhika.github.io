import React, { useEffect } from 'react'
import {
  Flex,
  Center,
  Spacer,
  Box,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';

function NavBar(){
   return(
      <Box bg='#F5F1E3'>
         <Center>
         <Flex w='35%' >
            <Center p='4'>
               Home
            </Center>
            <Spacer />
            <Center p='4'>
               Experience
            </Center>
            <Spacer />
            <Center p='4'>
               Skill
            </Center>
         </Flex>
         </Center>
      </Box>
   
   );
}

export default NavBar;