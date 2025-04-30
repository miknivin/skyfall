"use client";

import { Provider } from "react-redux";

import { Toaster } from "react-hot-toast";
import store from "@/redux/store";
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
