import React, { useState } from 'react';
import {
  ChakraProvider,
  extendTheme,
  Box,
  Stack,
  VStack,
  Grid,
  theme,
  Container,
  Image,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import './App.css';
import SearchForm from './SearchForm';
import MatchSummary from './MatchSummary';
import SearchResult from './SearchResult';

function App() {

  const [logoFilter, setLogoFilter] = useState("none");
  const theme = extendTheme({
    config: {
      initialColorMode: "light",
    },
  });
  const setFilter = (text) => {
    if (text === "dark") {
      setLogoFilter("invert(1)");
    } else {
      setLogoFilter("none");
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Container fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={6} alignItems={'left'}>
            <Box textAlign={"right"}>
              <ColorModeSwitcher justifySelf="flex-end" setLogoFilter={setFilter} />
            </Box>
            <Stack direction='row' gap={"0.5rem"}>
              <Image src='logo360.png' alt='Empower 360' width={"400px"} marginX={"0"}
                     style={{"filter": logoFilter}}/>
            </Stack>

            <SearchForm />
            <MatchSummary />
            <SearchResult />

          </VStack>
        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;
