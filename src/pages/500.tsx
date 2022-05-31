import Head from "next/head";
import React from "react";
import ErrorPage from "../shared/Page/Error";

function Custom500() {
  return (
    <>
      <Head>
        <title key="title">Error 500 - GetThatTool</title>
      </Head>
      <ErrorPage
        heading="Error 500"
        subHeading="We’re sorry, the server encountered an error"
      />
    </>
  );
}

export default Custom500;
