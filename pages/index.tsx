import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import CandyCard from "../components/CandyCard";
import { candies } from "../mockData";
import { Candy } from "../types";

interface HomeProps {
  candies: Candy[];
}

export default function Home(props: HomeProps) {
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
        <Heading textAlign="center">Tiendita de Mage</Heading>
        <Flex flexDir="column" gap={4}>
          {props.candies.map((candy) => (
            <CandyCard key={candy.id} {...candy} />
          ))}
        </Flex>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      candies,
    },
  };
}
