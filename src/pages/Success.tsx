import { useContext } from "react";
import { BillingRequestContext } from "../components/BillingRequestProvider";

const Success = () => {
  const { br } = useContext(BillingRequestContext);

  return (
    <div>
      <div className="rounded-md w-full text-lg">
        <div className="w-full bg-green-200 p-8 rounded-t-3xl">
          <p className="font-bold">
            Good news, {br.resources?.customer?.given_name}.
          </p>
          <p>
            Your ACH Debit Authorization with Growth Cave LLC was set up
            successfully.
          </p>
        </div>

        <div className="p-8 border-r border-l border-b border-gray-300 rounded-b-3xl">
          <p>Your payment receipt will be sent to:</p>
          <p className="font-bold">{br.resources?.customer?.email}</p>
        </div>

        <p className="text-center mt-6">You can safely close this window.</p>
      </div>
    </div>
  );
};

export default Success;
