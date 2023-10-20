import axios from "axios";
import { CustomerDetail } from "../pages/CollectCustomerDetail";
import { BillingRequest } from "../types/billing_request";
import { CustomerBankAccount } from "../pages/CollectBankInfo";

export const createPayment = async () => {
  return await axios.post<BillingRequest>(
    `${import.meta.env.VITE_BACKEND_URL}/api/billing-requests`
  );
};

export const collectCustomerDetail = async (
  br: string,
  data: CustomerDetail
) => {
  return await axios.post<BillingRequest>(
    `${
      import.meta.env.VITE_BACKEND_URL
    }/api/billing-requests/${br}/collect-customer-details`,
    data
  );
};

export const collectBankAccount = async (
  br: string,
  data: CustomerBankAccount
) => {
  return await axios.post<BillingRequest>(
    `${
      import.meta.env.VITE_BACKEND_URL
    }/api/billing-requests/${br}/collect-bank-account`,
    data
  );
};

export const confirmPayerDetail = async (br: string) => {
  return await axios.post<BillingRequest>(
    `${import.meta.env.VITE_BACKEND_URL}/api/billing-requests/${br}/confirm`
  );
};

export const fulfilBillingRequest = async (br: string) => {
  return await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/billing-requests/${br}/fulfil`
  );
};
