import { Box, Button, Card, CardBody, Flex, InputLeftAddon, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

const SearchForm = (props) => {
  const [value, setValue] = useState("");

  return (<>
    <Card variant={"filled"} size={"sm"} padding={'8'}>
      {/*<Card variant={"filled"} size={"sm"} bg={'green.50'} padding={'2'}>*/}
      <CardBody fontSize={'sm'} paddingBottom={'0'}>
        <Flex
          gap={1}
          flexWrap={'wrap'}
          marginBottom={'4'}
        >
          <Box as={"h2"} flex={'0 0 240px'} fontWeight={'bold'}>Customer Identifier Type</Box>
          <Box flex={'1'}>
            <RadioGroup onChange={setValue} defaultValue='personId'>
              <Stack direction='row' gap={'5'}>
                <Radio value='personId'>Person Id</Radio>
                <Radio value='guid'>User Guid</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Flex>
        <Flex
          gap={1}
          flexWrap={'wrap'}
          marginBottom={'4'}
        >
          <Box as={"h2"} flex={'0 0 240px'} fontWeight={'bold'}>Customer Identifier Value</Box>
          <Box flex={'1'}>yee</Box>
        </Flex>
        <Flex
          gap={1}
          flexWrap={'wrap'}
          marginBottom={'4'}
        >
          <Box as={"h2"} flex={'0 0 240px'} fontWeight={'bold'}>Customer Search Origin</Box>
          <Box flex={'1'}>
            <RadioGroup onChange={setValue} defaultValue='affiliate'>
              <Stack direction='row' gap={'5'}>
                <Radio value='affiliate'>Affiliate</Radio>
                <Radio value='d2c'>D2C</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box flex={'1'} textAlign={'right'}>
            <Button colorScheme='blue' size='sm'>
              Search
            </Button>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  </>);
}

export default SearchForm;