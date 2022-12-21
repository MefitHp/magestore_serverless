import "../styles/globals.css";
import { ChakraProvider, Container } from "@chakra-ui/react";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
