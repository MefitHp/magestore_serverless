import {
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
import { Candy } from "../types";

const CandyCard = ({
  id,
  name,
  unitPrice,
  imageURL = "https://media.tenor.com/AQQnlI_JhQMAAAAM/candy.gif",
}: Candy) => {
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
      </Flex>
      <Image
        src={imageURL}
        width="100%"
        objectFit="cover"
        alt={`Foto de ${name}`}
      />
    </Grid>
  );
};

export default CandyCard;
