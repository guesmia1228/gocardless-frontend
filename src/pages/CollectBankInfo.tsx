import { useCallback, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { collectBankAccount } from "../api";
import { useNavigate } from "react-router-dom";
import { BillingRequestContext } from "../components/BillingRequestProvider";
import {
  BillingRequestAccountType,
  BillingRequestActionStatus,
  BillingRequestActionType,
} from "../types/billing_request";
import ProductInfo from "../components/ProductInfo";

export interface CustomerBankAccount {
  account_holder_name: string;
  bank_code: string;
  account_number: string;
  account_type: string;
}

const CollectBankInfo = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<CustomerBankAccount>();
  const { br, setBR } = useContext(BillingRequestContext);

  const handleCollect = useCallback(
    async (data: CustomerBankAccount) => {
      if (br.id) {
        const { data: res } = await collectBankAccount(br.id, data);

        setBR(res);
        const completed =
          res.actions?.find(
            (action) =>
              action.type == BillingRequestActionType.CollectBankAccount
          )?.status == BillingRequestActionStatus.Completed;

        if (completed) {
          navigate("/confirm");
        }
      }
    },
    [br]
  );

  useEffect(() => {
    if (!br.id) {
      navigate("/checkout");
    }
  }, [br]);

  return (
    <form onSubmit={handleSubmit(handleCollect)}>
      <ProductInfo />

      <h3 className="text-xl font-bold mt-8">Your personal details</h3>

      <div className="flex flex-col">
        <label className="form-label">Account holder name</label>
        <input {...register("account_holder_name", { required: true })} />
      </div>

      <div className="rounded-md border border-gray-300 mt-6">
        <div className="p-6 flex flex-row justify-between bg-slate-100">
          <p className="text-sm font-bold">
            Payments are securely powered by GoCardless
          </p>
        </div>
        <hr />
        <div className="p-6">
          <div className="flex flex-row w-full space-x-2 mt-2">
            <div className="flex flex-col flex-1">
              <label className="form-label">Routing number</label>
              <label>Your bank code</label>
              <input {...register("bank_code", { required: true })} />
            </div>
            <div className="flex flex-col flex-1">
              <label className="form-label">Account Number</label>
              <label>Your account number</label>
              <input {...register("account_number", { required: true })} />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="form-label">Account type</label>
            <select {...register("account_type", { required: true })}>
              <option value={BillingRequestAccountType.Checking}>
                Checking (most common)
              </option>
              <option value={BillingRequestAccountType.Savings}>Savings</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="mt-4 rounded-full bg-black hover:opacity-80 text-white p-3 w-1/3 min-w-fit"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default CollectBankInfo;
