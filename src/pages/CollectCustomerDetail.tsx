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
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
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
