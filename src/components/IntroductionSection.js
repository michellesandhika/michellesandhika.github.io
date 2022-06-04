import React, { useEffect } from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  GridItem,
  Grid,
  Image,
} from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons'

import picture from '../images/picture.jpg'

function IntroductionSection(){

   return(
      <Box h="700px" bg='#F5F1E3'>
         <Box p ='8'>
           <Text color='#3c1518' fontWeight='bold' fontSize='7xl'>Hello!</Text>
         </Box>
         <Grid templateColumns='repeat(7, 1fr)' gap={5}>
            <GridItem colStart={2} colEnd={4} h='10' bg='papayawhip'>
            <Image
               borderRadius='2xl'
               src={picture}
               alt='Dan Abramov'
               />
            </GridItem>
            <GridItem colStart={4} colEnd={7} p='7' h='100' fontSize='2xl' align='left'>
               <Text fontSize='5xl' fontWeight='semibold' color='#69140E'> I'm Michelle Sandhika! </Text>
               <Text fontSize='2l' color='blackAlpha.500'>
                  Software Engineer</Text>
               <br></br>
                  <Text fontSize='xl'>
                  I graduated from The Hong Kong Polytechnic University in 2022 majoring in Information Technology.</Text>
                  <br></br>
                  <ArrowDownIcon />
            </GridItem>
         </Grid>
         {/* <Box h="200px" w="200px">
            Hello!
            Welcome to my Website
            Scroll down to know more about me!
         </Box> */}
      </Box>

   );
}

export default IntroductionSection;