import {
  Card,
  CardBody,
  Heading,
  Tab, Table, TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs, Tbody, Td, Th, Tr
} from '@chakra-ui/react';
import React, { useState } from 'react';

const SearchResult = (props) => {
  return (<>
    <Tabs variant='soft-rounded' colorScheme='blue'>
      <TabList>
        <Tab fontSize={'sm'}>Affiliate (Origin)</Tab>
        <Tab fontSize={'sm'}>D2C - By SSN</Tab>
        <Tab fontSize={'sm'}>D2C - By Demographics</Tab>
        <Tab fontSize={'sm'}>D2C - By Email</Tab>
      </TabList>
      <TabPanels>
        <TabPanel paddingX={"0"}>
          <Card variant={"filled"} size={"sm"} padding={'8'}>
            <CardBody>
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
            </CardBody>
          </Card>
        </TabPanel>

        <TabPanel paddingX={"0"}>
          <Card variant={"filled"} size={"sm"}  padding={'8'}>
            <CardBody>
              <TableContainer marginY={"1rem"}>
                <Table size='sm'>
                  <Tbody>
                    <Tr>
                      <Th borderColor='gray.400'>inches</Th>
                      <Td borderColor='gray.400' isNumeric>25.4</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>
          </Card>
        </TabPanel>

        <TabPanel paddingX={"0"}>
          <Card variant={"filled"} size={"sm"}  padding={'8'}>
            <CardBody>
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
                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>
          </Card>
        </TabPanel>

        <TabPanel paddingX={"0"}>
          <Card variant={"filled"} size={"sm"} padding={'8'}>
            <CardBody>
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
                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </>);
}

export default SearchResult;