import { createContext, FC, PropsWithChildren, useState } from "react";
import { BillingRequest } from "../types/billing_request";

export const BillingRequestContext = createContext<{
  br: BillingRequest;
  payment?: { name: string; amount: string; isOneOff: boolean };
  setBR: (br: BillingRequest) => void;
  setPayment: (name: string, amount: string, isOneOff: boolean) => void;
}>({} as any);

const BillingRequestProvider: FC<PropsWithChildren> = ({ children }) => {
  const [br, setBR] = useState({});
  const [payment, setPayment] = useState<any>({});

  return (
    <BillingRequestContext.Provider value={{ br, setBR, payment, setPayment }}>
      {children}
    </BillingRequestContext.Provider>
  );
};

export default BillingRequestProvider;
