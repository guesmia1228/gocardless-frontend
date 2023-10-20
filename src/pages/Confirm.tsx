const Confirm = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mt-8">Please confirm your details</h1>

      <div className="rounded-lg border border-gray-300 p-6 mt-6">
        <div className="w-full flex flex-row">
          <div className="flex flex-1 flex-col">
            <p>Name</p>
            <p className="font-bold">John Doe</p>
            <p className="mt-6">Email</p>
            <p className="font-bold">johndoe@admin.com</p>
          </div>

          <div>
            <button>Change</button>
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
                <p className="font-bold">Ending ******34</p>
              </div>
            </div>
          </div>

          <div>
            <button>Change</button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center mt-4">
        <button className="mt-4 rounded-full bg-black hover:opacity-80 text-white p-3 w-3/4 min-w-fit">
          Set up this ACH Debit Authorization
        </button>
      </div>
    </div>
  );
};

export default Confirm;
