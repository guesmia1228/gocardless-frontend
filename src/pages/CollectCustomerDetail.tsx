import { useCallback, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { collectCustomerDetail } from "../api";
import { BillingRequestContext } from "../components/BillingRequestProvider";
import { useNavigate } from "react-router-dom";
import {
  BillingRequestActionStatus,
  BillingRequestActionType,
} from "../types/billing_request";
import ProductInfo from "../components/ProductInfo";

const countryOptions = [{ label: "United States", value: "US" }];
const regions = [
  { label: "California", value: "CA" },
  { label: "Florida", value: "FL" },
  { label: "Georgia", value: "GA" },
];

export interface CustomerDetail {
  customer: {
    email: string;
    given_name: string;
    family_name: string;
  };
  customer_billing_detail: {
    address_line1: string;
    address_line2?: string;
    city: string;
    country_code: string;
    postal_code: string;
    region: string;
  };
}

const CollectCustomerDetail = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm<CustomerDetail>();
  const { br, setBR } = useContext(BillingRequestContext);

  const handleCollect = useCallback(
    async (data: CustomerDetail) => {
      console.log("data :", data);
      if (br.id) {
        const { data: res } = await collectCustomerDetail(br.id, data);

        setBR(res);

        if (
          res.actions?.find(
            (action) =>
              action.type == BillingRequestActionType.CollectCustomerDetails
          )?.status == BillingRequestActionStatus.Completed
        ) {
          navigate("/collect-bank-account");
        }
      }
    },
    [br]
  );

  useEffect(() => {
    if (!br.id) {
      navigate("/");
    }
  }, [br]);

  return (
    <div className="space-y-3">
      <ProductInfo />

      <form onSubmit={handleSubmit(handleCollect)}>
        <div className="flex flex-col mt-8">
          <label className="form-label">Country of residence</label>
          <select
            {...register("customer_billing_detail.country_code", {
              required: true,
            })}
          >
            {countryOptions.map(({ label, value }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <h3 className="text-xl font-bold mt-8">Your personal details</h3>

        <div className="flex flex-row w-full space-x-2 mt-2">
          <div className="flex flex-col flex-1">
            <label className="form-label">First name</label>
            <input
              {...register("customer.given_name", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="form-label">Last name</label>
            <input
              {...register("customer.family_name", {
                required: true,
              })}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="form-label">Email address</label>
          <input
            type="email"
            {...register("customer.email", {
              required: true,
            })}
          />
        </div>

        <div className="flex flex-col">
          <label className="form-label">Billing address line1</label>
          <input
            {...register("customer_billing_detail.address_line1", {
              required: true,
            })}
          />
        </div>

        <div className="flex flex-col">
          <label className="form-label">Billing address line2</label>
          <input
            {...register("customer_billing_detail.address_line2", {
              required: false,
            })}
          />
        </div>

        <div className="flex flex-row w-full space-x-2 mt-2">
          <div className="flex flex-col flex-1">
            <label className="form-label">Town or City</label>
            <input
              {...register("customer_billing_detail.city", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="form-label">Postcode</label>
            <input
              onChange={(e) =>
                setValue("customer_billing_detail.postal_code", e.target.value)
              }
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="form-label">State/Territory</label>
          <select
            {...register("customer_billing_detail.region", {
              required: true,
            })}
          >
            {regions.map(({ label, value }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>
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
    </div>
  );
};

export default CollectCustomerDetail;
