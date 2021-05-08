import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { baseSelectOptions } from "./constants";
import { convertBase } from "./utils";

const BaseConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Base Converter"
      subHeading="Quickly convert a number between octal, hexadecimal, binary etc."
      selectOptions={baseSelectOptions}
      fromDefaultValue="base-10"
      toDefaultValue="base-2"
      convertFunction={convertBase}
    />
  );
};

export default BaseConverter;
