const Success = () => {
  return (
    <div>
      <div className="rounded-md w-full text-lg">
        <div className="w-full bg-green-200 p-8 rounded-t-3xl">
          <p className="font-bold">Good news, John.</p>
          <p>
            Your ACH Debit Authorization with Growth Cave LLC was set up
            successfully.
          </p>
        </div>

        <div className="p-8 border-r border-l border-b border-gray-300 rounded-b-3xl">
          <p>Your payment receipt will be sent to:</p>
          <p className="font-bold">johndoe123@admin.com</p>
        </div>

        <p className="text-center mt-6">You can safely close this window.</p>
      </div>
    </div>
  );
};

export default Success;
