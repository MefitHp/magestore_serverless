import "../styles/globals.css";
import { ChakraProvider, Container } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import CartButton from "../components/CartButton";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container boxShadow="base" minH="100vh" position="relative">
        <Navbar />
        <Component {...pageProps} />
        <CartButton />
      </Container>
    </ChakraProvider>
  );
}
