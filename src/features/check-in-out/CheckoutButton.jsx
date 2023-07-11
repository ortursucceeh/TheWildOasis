import Button from "../../ui/Button";
import { useCheckout } from "./useChechout";

function CheckoutButton({ bookingId }) {
  const { checkout } = useCheckout();
  return (
    <Button
      $variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
