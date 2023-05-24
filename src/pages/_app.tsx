import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import React from "react";
import Menu from "@/components/Layout/Menu";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Menu />
    </>
  );
};

export default MyApp;
