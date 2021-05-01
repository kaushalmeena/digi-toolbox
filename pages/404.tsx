import Head from "next/head";
import React, { FunctionComponent } from "react";
import ErrorPage from "../screens/common/Page/Error";

const Custom404: FunctionComponent = () => (
  <>
    <Head>
      <title key="title">Error 400 - GetThatTool</title>
    </Head>
    <ErrorPage
      heading="Error 404"
      subHeading="The page you’re looking for no longer exists"
    />
  </>
);

export default Custom404;
