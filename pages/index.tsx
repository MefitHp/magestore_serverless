import { Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>La tiendita de Mage</title>
        <meta
          name="description"
          content="Pide tus dulces de manera fácil, dentro de Cassim"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading>Tiendita de Mage</Heading>
      </main>
    </>
  );
}
