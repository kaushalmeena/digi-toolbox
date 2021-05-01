import Head from "next/head";
import React, { FunctionComponent } from "react";
import ChangeCasePage from "../screens/Tools/Text/ChangeCase";

const ChangeCase: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Change Case - GetThatTool</title>
      <meta
        key="description"
        name="description"
        content="Super simple, free and fast browser-based utility for changing text case."
      />
    </Head>
    <ChangeCasePage />
  </>
);

export default ChangeCase;
