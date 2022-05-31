import React from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { AreaSelectOptions, AreaUnits } from "./constants";
import { convertArea } from "./utils";

function AreaConverter() {
  return (
    <Page
      heading="Area Converter"
      subHeading="Quickly convert area between sq. meter, sq mile, sq. foot etc. etc."
      selectOptions={AreaSelectOptions}
      fromDefaultValue={AreaUnits.SQ_KILOMETER}
      toDefaultValue={AreaUnits.SQ_METER}
      convertFunction={convertArea}
    />
  );
}

export default AreaConverter;
