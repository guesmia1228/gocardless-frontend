import { useNavigate } from "react-router-dom";
import { BillingRequestContext } from "../components/BillingRequestProvider";
import { useContext } from "react";
import { confirmPayerDetail, fulfilBillingRequest } from "../api";
import {
  BillingRequestActionStatus,
  BillingRequestActionType,
} from "../types/billing_request";
import ProductInfo from "../components/ProductInfo";

const Confirm = () => {
  const navigate = useNavigate();
  const { br, setBR } = useContext(BillingRequestContext);

  const handleConfirm = async () => {
    if (br.id) {
      const { data: res } = await confirmPayerDetail(br.id);
      await fulfilBillingRequest(br.id);

      setBR(res);

      if (
        res.actions?.find(
          (action) =>
            action.type == BillingRequestActionType.ConfirmPayerDetails
        )?.status == BillingRequestActionStatus.Completed
      ) {
        navigate("/success");
      }
    }
  };

  return (
    <div>
      <ProductInfo />

      <h1 className="text-2xl font-bold mt-8">Please confirm your details</h1>

      <div className="rounded-lg border border-gray-300 p-6 mt-6">
        <div className="w-full flex flex-row">
          <div className="flex flex-1 flex-col">
            <p>Name</p>
            <p className="font-bold">
              {br.resources?.customer?.given_name +
                " " +
                br.resources?.customer?.family_name}
            </p>
            <p className="mt-6">Email</p>
            <p className="font-bold">{br.resources?.customer?.email}</p>
          </div>

          <div>
            <button onClick={() => navigate("/collect-customer-details")}>
              Change
            </button>
          </div>
        </div>

        <hr className="my-12" />

        <div className="flex w-full flex-row">
          <div className="flex flex-1 flex-col">
            <p>Name</p>
            <p className="font-bold">John Doe</p>

            <div className="flex flex-row mt-6">
              <div className="flex-1">Bank name</div>

              <div className="flex-1">
                <p>Account number</p>
                <p className="font-bold">
                  Ending ******
                  {br.resources?.customer_bank_account?.account_number_ending}
                </p>
              </div>
            </div>
          </div>

          <div>
            <button onClick={() => navigate("/collect-bank-account")}>
              Change
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center mt-4">
        <button
          className="mt-4 rounded-full bg-black hover:opacity-80 text-white p-3 w-3/4 min-w-fit"
          onClick={handleConfirm}
        >
          Set up this ACH Debit Authorization
        </button>
      </div>
    </div>
  );
};

export default Confirm;
