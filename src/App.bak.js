import React, { useState } from 'react';
import {
  ChakraProvider,
  useColorMode,
  Box,
  Text,
  Input,
  Link,
  Stack,
  VStack,
  Grid,
  theme,
  Container,
  InputGroup, InputLeftAddon,
  Heading,
  Button,
  Card, CardBody, Skeleton, CardHeader,
  Tab, Tabs, TabList, TabPanel, TabPanels,
  TableContainer, Table, Thead, Th, Tr, Tbody, Td,
  Image
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [value, setValue] = useState("");
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <ChakraProvider theme={theme}>
      <Container fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={2} alignItems={'left'}>
            <Box textAlign={"right"}>
              <ColorModeSwitcher justifySelf="flex-end"/>
            </Box>
            <Stack spacing={5} direction='row' marginY={'2rem'} gap={"0.5rem"}>
              <Image src='logo360.png' alt='Empower 360' width={"400px"} marginX={"0"} />
            </Stack>
            <Tabs variant='soft-rounded' colorScheme='blue'>
              <TabList>
                <Tab>Person Id</Tab>
                <Tab>User Guid</Tab>
              </TabList>
              <TabPanels>
                <TabPanel paddingLeft={"0"}>
                  <Stack spacing={5} direction='row'>
                    <InputGroup>
                      <InputLeftAddon children='Search User' />
                      <Input placeholder='enter personId' />
                    </InputGroup>
                    <Button colorScheme='blue' size='md'>
                      Submit
                    </Button>
                  </Stack>
                </TabPanel>
                <TabPanel paddingLeft={"0"}>
                  <Stack spacing={5} direction='row'>
                    <InputGroup>
                      <InputLeftAddon children='Search User' />
                      <Input placeholder='enter guid' />
                    </InputGroup>
                    <Button colorScheme='blue' size='md'>
                      Submit
                    </Button>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Card variant={"filled"} size={"sm"}>
              <CardBody>
                <CardHeader>
                  <Heading size='md'>Empower User Data</Heading>
                  <TableContainer marginY={"1rem"}>
                    <Table size='sm'>
                      <Tbody>
                        <Tr>
                          <Th borderColor='gray.400'>inches</Th>
                          <Td borderColor='gray.400' isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                          <Th borderColor='gray.400'>feet</Th>
                          <Td borderColor='gray.400' isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                          <Th borderColor='gray.400'>inches</Th>
                          <Td borderColor='gray.400' isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                          <Th borderColor='gray.400'>feet</Th>
                          <Td borderColor='gray.400' isNumeric>30.48</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </CardHeader>
              </CardBody>
            </Card>
            <Card variant={"filled"} size={"sm"}>
              <CardBody>
                <Heading size='md'>Pcap User Data</Heading>
                {/*<Stack>*/}
                {/*  <Skeleton height='20px' />*/}
                {/*  <Skeleton height='20px' />*/}
                {/*  <Skeleton height='20px' />*/}
                {/*</Stack>*/}
              </CardBody>
            </Card>
          </VStack>
        </Grid>
      </Container>
      <a href="https://www.flaticon.com/free-icons/360-degrees" title="360 degrees icons">360 degrees icons created by Freepik - Flaticon</a>
    </ChakraProvider>
  );
}

export default App;
