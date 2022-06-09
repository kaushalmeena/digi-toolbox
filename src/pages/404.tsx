import Head from "next/head";
import React from "react";
import ErrorPage from "../shared/Pages/Error";

function Custom404() {
  return (
    <>
      <Head>
        <title key="title">Error 400 - GetThatTool</title>
      </Head>
      <ErrorPage
        heading="Error 404"
        subHeading="The page you're looking for no longer exists"
      />
    </>
  );
}

export default Custom404;
