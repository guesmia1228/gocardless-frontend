const CollectBankInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mt-8">Your personal details</h3>

      <div className="flex flex-col">
        <label className="form-label">Account holder name</label>
        <input />
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
              <input />
            </div>
            <div className="flex flex-col flex-1">
              <label className="form-label">Account Number</label>
              <label>Your account number</label>
              <input />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="form-label">Account type</label>
            <select />
          </div>
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

export default CollectBankInfo;
