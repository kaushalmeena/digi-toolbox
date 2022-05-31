import React from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { BaseSelectOptions } from "./constants";
import { convertBase } from "./utils";

function BaseConverter() {
  return (
    <Page
      heading="Base Converter"
      subHeading="Quickly convert number between octal, hexadecimal, binary etc."
      selectOptions={BaseSelectOptions}
      fromDefaultValue="base-10"
      toDefaultValue="base-2"
      convertFunction={convertBase}
    />
  );
}

export default BaseConverter;
