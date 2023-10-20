import { createContext, FC, PropsWithChildren, useState } from "react";

export interface BillingRequest {}

export const BillingRequestContext = createContext<{
  br: BillingRequest;
  setBR: (br: BillingRequest) => void;
}>({} as any);

const BillingRequestProvider: FC<PropsWithChildren> = ({ children }) => {
  const [br, setBR] = useState({});

  return (
    <BillingRequestContext.Provider value={{ br, setBR }}>
      {children}
    </BillingRequestContext.Provider>
  );
};

export default BillingRequestProvider;
