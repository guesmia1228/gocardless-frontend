const countryOptions = ["United States", "Belgium", "Australia"];

const CollectCustomerDetail = () => {
  return (
    <div className="space-y-3">
      <div className="flex flex-col">
        <label className="form-label">Country of residence</label>
        <select>
          {countryOptions.map((country) => (
            <option value={country}>{country}</option>
          ))}
        </select>
      </div>

      <h3 className="text-xl font-bold mt-8">Your personal details</h3>

      <div className="flex flex-row w-full space-x-2 mt-2">
        <div className="flex flex-col flex-1">
          <label className="form-label">First name</label>
          <input />
        </div>
        <div className="flex flex-col flex-1">
          <label className="form-label">Last name</label>
          <input />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="form-label">Email address</label>
        <input />
      </div>

      <div className="flex flex-col">
        <label className="form-label">Billing address line1</label>
        <input />
      </div>

      <div className="flex flex-col">
        <label className="form-label">Billing address line2</label>
        <input />
      </div>

      <div className="flex flex-row w-full space-x-2 mt-2">
        <div className="flex flex-col flex-1">
          <label className="form-label">Town or City</label>
          <input />
        </div>
        <div className="flex flex-col flex-1">
          <label className="form-label">Postcode</label>
          <input />
        </div>
      </div>

      <div className="mt-4">
        <button className="mt-4 rounded-full bg-black hover:opacity-80 text-white p-3 w-1/3 min-w-fit">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CollectCustomerDetail;
