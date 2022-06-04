import React, { useEffect } from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  TabList,
  TabPanels,
  Tabs,
  TabPanel,
  Tab,
  UnorderedList,
  ListItem,
  Button,
  Link,
} from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons'

import picture from '../images/picture.jpg'

function Experience(){
   return(
      <Box h="700px" bg='#69140E'>
         <Box p ='6'>
           <Text color='#F5F1E3' fontWeight='bold' fontSize='6xl'>Experience</Text>
         </Box>
         <Box pr='40' pl='40'>
         <Tabs isFitted variant='enclosed' pr='20' pl='20' colorScheme="whiteAlpha" variantColor="orange"  color="white">
            <TabList mb='1em'>
               <Tab>J.P. Morgan</Tab>
               <Tab>Pricewaterhouse Coopers</Tab>
               <Tab>EventBinder Limited</Tab>
               <Tab>Cyber Insurance Broker Limited</Tab>
               <Tab>Indonesia's Presidential Election in Macau</Tab>
            </TabList>
            <TabPanels color="white" align='left'>
               <TabPanel>
                  <Text fontSize='lg'>June 2021 - August 2021<br/></Text>
                  <br/>
                  <Text fontWeight="semibold" fontSize='2xl'>J.P. Morgan - Software Engineering Program - Summer Analyst</Text>
                  <UnorderedList fontSize='xl'>
                     <ListItem>Performed data migration from one source to another for the team</ListItem>
                     <ListItem>Created a webservice to automate the workflow of morning health check of a server</ListItem>
                     <ListItem>Created an internal bot to read the webservice in a user friendly way for the team</ListItem>
                  </UnorderedList>
               </TabPanel>
               <TabPanel>
                  <Text fontSize='lg'>Jan 2021 - May 2021<br/></Text>
                  <br/>
                  <Text fontWeight="semibold" fontSize='2xl'>PricewaterhouseCoopers Limited (PwC) - Risk Assurance - Cybersecurity</Text>
                  <UnorderedList fontSize='xl'>
                     <ListItem>Created more than 50 reports on the safety of client websites using kali, burp and acunetix.</ListItem>
                     <ListItem>Created different python scripts to automate different admin tasks.</ListItem>
                     <ListItem>Assisted in implementing features for a web application with Vue.</ListItem>
                  </UnorderedList>
               </TabPanel>
               <TabPanel>
                  <Text fontSize='lg'>Jun 2020 - Aug 2020<br/></Text>
                  <br/>
                  <Text fontWeight="semibold" fontSize='2xl'>EventBinder Limited - System Development Intern</Text>
                  <UnorderedList fontSize='xl'>
                     <ListItem>Created a dynamic one page website from scratch using react functional programming.</ListItem>
                     <ListItem>Made reusable components for the company to use on their other applications.</ListItem>
                     <ListItem>The one page website is used as a prototype to cyberport as a mockup of the application.</ListItem>
                  </UnorderedList>
               </TabPanel>
               <TabPanel>
                  <Text fontSize='lg'>Jun 2019<br/></Text>
                  <br/>
                  <Text fontWeight="semibold" fontSize='2xl'>Cyber Insurance Broker Limited - Intern Staff</Text>
                  <UnorderedList fontSize='xl'>
                     <ListItem>Researched and generated more than 10 article content for the company’s website.</ListItem>
                     <ListItem>Assisted on the SEO optimisation for some of the company’s articles.</ListItem>
                  </UnorderedList>
                  <br></br>
               </TabPanel>
               <TabPanel>
                  <Text fontSize='lg'>Apr 2019<br/></Text>
                  <br/>
                  <Text fontWeight="semibold" fontSize='2xl'>Indonesia’s Presidential Election in Macau - IT Support Officer</Text>
                  <UnorderedList fontSize='xl'>
                     <ListItem>Set up the technical ecosystem (laptops, printers) for the election.</ListItem>
                     <ListItem>Reported and troubleshooted network and other technical problems (printer sharing error)</ListItem>
                  </UnorderedList>
                  <br></br>
               </TabPanel>
            </TabPanels>
            </Tabs>
         </Box>
         <br></br>
         <br/>
         <Link href='https://drive.google.com/file/d/1jXmLZJRr4Y6O4PTZpqI6cpRsr59G2MwW/view?usp=sharing' style={{ textDecoration: 'none' }}><Button colorScheme="whiteAlpha" size="lg">Download My Resume Here!</Button></Link>
         
      </Box>
   );
}

export default Experience;