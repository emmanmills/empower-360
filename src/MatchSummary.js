import React, { useState } from 'react';
import { Card, CardBody, Heading, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

const MatchSummary = (props) => {
  return(<>
    <Card variant={"filled"} size={"sm"} padding={'8'}>
      {/*<Card variant={"filled"} size={"sm"} bg={'yellow.50'} padding={'2'}>*/}
      <CardBody fontSize={'sm'} paddingTop={'0'}>
        <Heading size='sm' marginBottom={'8'}>Match Summary</Heading>
        <List spacing={4}>
        <ListItem>
          <ListIcon as={CheckIcon} color='green.500' />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color='green.500' />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color='green.500' />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon as={CheckIcon} color='green.500' />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
      </List>
      </CardBody>
    </Card>
  </>);
}

export default MatchSummary;