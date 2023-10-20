import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex justify-center pt-12">
      <div className="max-w-2xl flex flex-1 flex-col">
        <div className="bg-white px-16 py-12 rounded-3xl w-full">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Container;
