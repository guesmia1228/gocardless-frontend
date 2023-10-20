import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { createPayment } from "../api";
import { BillingRequestContext } from "../components/BillingRequestProvider";

const Checkout = () => {
  const { setBR } = useContext(BillingRequestContext);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      const { data: billingRequest } = await createPayment();
      setBR(billingRequest);
      navigate("/collect-customer-details");
    } catch (e) {
      console.log(e);
      console.log("Failed to create");
    }
  };

  return <button onClick={handleCheckout}>Checkout</button>;
};

export default Checkout;
