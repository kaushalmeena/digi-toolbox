import Head from "next/head";
import React from "react";
import PrettifyJSONPage from "../screens/Tools/JSON/PrettifyJSON";

function PrettifyJSON() {
  return (
    <>
      <Head>
        <title key="title">Prettify JSON - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that prettifies JSON."
        />
      </Head>
      <PrettifyJSONPage />
    </>
  );
}

export default PrettifyJSON;
