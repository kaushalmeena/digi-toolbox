import React, { FunctionComponent } from "react";
import ErrorPage from "../screens/common/Page/Error";

const Custom404: FunctionComponent = () => (
  <ErrorPage
    heading="Error 404"
    subHeading="The page you’re looking for no longer exists"
  />
);

export default Custom404;
