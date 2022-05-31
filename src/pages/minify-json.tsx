import Head from "next/head";
import React from "react";
import MinifyJSONPage from "../screens/Tools/JSON/MinifyJSON";

function MinifyJSON() {
  return (
    <>
      <Head>
        <title key="title">Minify JSON - GetThatTool</title>
        <meta
          key="description"
          name="description"
          content="Simple, free and easy to use online tool that minifies JSON."
        />
      </Head>
      <MinifyJSONPage />
    </>
  );
}
export default MinifyJSON;
