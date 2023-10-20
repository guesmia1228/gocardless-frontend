import { useContext } from "react";
import { BillingRequestContext } from "./BillingRequestProvider";

const ProductInfo = () => {
  const { br } = useContext(BillingRequestContext);

  if (!br.metadata) return <></>;

  return (
    <div className="bg-slate-100 rounded-md flex flex-col py-6 px-8">
      <p className="font-bold">{br.metadata.description as string}</p>

      <div className="flex flex-row items-end mt-4">
        <div>
          <span>$</span>
          <span className="text-2xl font-bold ml-1">
            {parseInt(br.metadata.amount as string) / 100}.
          </span>
          <span>{parseInt(br.metadata.amount as string) % 100}</span>
        </div>

        <div className="ml-3 text-xs p-1 bg-slate-200 rounded-2xl">
          {br.metadata.isOneOff === "true"
            ? "One-off payment"
            : "Recurring payment"}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
