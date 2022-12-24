import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { useState } from "react";
import { Candy } from "../types";

const CandyCard = ({
  name,
  unitPrice,
  imageURL = "https://media.tenor.com/AQQnlI_JhQMAAAAM/candy.gif",
}: Candy) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleQuantity = (event: any) => {
    const { name } = event.target;
    // Increase
    if (name === "increase") {
      return setQuantity((currQty) => currQty + 1);
    }
    // Decrease
    if (name === "decrease") {
      if (quantity <= 0) return;
      return setQuantity((currQty) => currQty - 1);
    }
  };
  return (
    <Grid
      templateColumns="1fr 1fr"
      boxShadow="lg"
      padding={4}
      borderRadius="lg"
    >
      <Flex flexDir="column">
        <Heading>{name}</Heading>
        <Stat>
          <StatLabel>Precio Unitario:</StatLabel>
          <StatNumber>{unitPrice}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            Precio Promo: 2x{unitPrice - 2}
          </StatHelpText>
        </Stat>
        <Box>
          <Flex gap={1}>
            <Button colorScheme="teal" name="decrease" onClick={handleQuantity}>
              -
            </Button>
            <Flex
              flex={1}
              alignItems="center"
              justifyContent="center"
              border="1px solid rgba(0,0,0,0.13)"
              borderRadius="base"
            >
              {quantity}
            </Flex>
            <Button colorScheme="teal" name="increase" onClick={handleQuantity}>
              +
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Image
          src={imageURL}
          width="100%"
          objectFit="cover"
          alt={`Foto de ${name}`}
        />
      </Flex>
    </Grid>
  );
};

export default CandyCard;
