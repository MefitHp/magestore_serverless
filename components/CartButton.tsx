import { useRouter } from "next/router";
import { Icon, IconButton, Tooltip } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
    const router = useRouter()
  return (
    <Tooltip label="Ir al carrito" placement="right">
      <IconButton
        position="fixed"
        bottom="1rem"
        colorScheme="teal"
        aria-label="Shopping Cart"
        size="lg"
        onClick={()=>{
            router.push('/carrito')
        }}
        icon={<Icon as={FaShoppingCart} />}
      />
    </Tooltip>
  );
};

export default CartButton;
