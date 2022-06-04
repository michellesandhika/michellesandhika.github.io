import React, { useEffect } from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';
import NavBar from './NavBar'
import IntroductionSection from './IntroductionSection';
import Experience from './Experience';
import Footer from './Footer';


function Home() {
return (
   <Box textAlign="center" fontSize="xl">
      <NavBar/>
      <IntroductionSection/>
      <Experience/>
      {/* <Footer/> */}
      </Box>
 );
}

export default Home;