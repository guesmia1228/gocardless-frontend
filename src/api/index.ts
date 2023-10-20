import axios from "axios";
import { BillingRequest } from "../components/BillingRequestProvider";

export const createPayment = async () => {
  const response = await axios.post<{ billing_requests: BillingRequest }>(
    `${import.meta.env.VITE_BACKEND_URL}/api/`
  );

  return response.data.billing_requests;
};
