import React from "react";
import { Button, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Flex direction="row" align="center" justify="center" gap={2}>
      <Link href="/">
        <Button colorScheme="teal" variant="ghost">
          Inicio
        </Button>
      </Link>
      <Link href="/catalogo">
        <Button colorScheme="teal" variant="ghost">
          Catálogo
        </Button>
      </Link>
      <Link href="/pago">
        <Button colorScheme="teal" variant="ghost">
          Pago
        </Button>
      </Link>
    </Flex>
  );
};

export default Navbar;
