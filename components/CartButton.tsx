import { Icon, IconButton, Tooltip } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
  return (
    <Tooltip label="Ir al carrito" placement="right">
      <IconButton
        position="fixed"
        bottom="1rem"
        colorScheme="teal"
        aria-label="Shopping Cart"
        size="lg"
        icon={<Icon as={FaShoppingCart} />}
      />
    </Tooltip>
  );
};

export default CartButton;
