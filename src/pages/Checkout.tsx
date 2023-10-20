import { useContext } from "react";

import { createPayment } from "../api";
import { BillingRequestContext } from "../components/BillingRequestProvider";

const Checkout = () => {
  const { setBR } = useContext(BillingRequestContext);

  const handleCheckout = async () => {
    const billingRequest = await createPayment();

    setBR(billingRequest);
  };

  return <button onClick={handleCheckout}>Checkout</button>;
};

export default Checkout;
