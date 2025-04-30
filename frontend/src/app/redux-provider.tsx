"use client";

import { Provider } from "react-redux";
import store from "../redux/store";
import { Toaster } from "react-hot-toast";
const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Toaster />
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default ReduxProvider;
