import React, { useEffect } from 'react'
import {
  ChakraProvider,
  Box,
  Center,
  Flex,
  Spacer,
  Tabs,
  TabPanel,
  Tab,
  UnorderedList,
  HStack,
  Button,
  Link,
} from '@chakra-ui/react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


function Footer(){
return(
   <Box bg='#69140E' align='right'>
   <HStack align="right" spacing='12px'>
      <Box><AiFillLinkedin color='white' /></Box>
      <Box><AiFillGithub color='white' boxSize={6}/></Box>
   </HStack>
      </Box>
);
}

export default Footer;