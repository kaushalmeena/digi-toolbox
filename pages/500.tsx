import React, { FunctionComponent } from "react";
import ErrorPage from "../screens/common/Page/Error";

const Custom500: FunctionComponent = () => (
  <ErrorPage
    heading="Error 500"
    subHeading="We’re sorry, the server encountered an error"
  />
);

export default Custom500;
