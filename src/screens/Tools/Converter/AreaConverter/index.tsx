import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { AreaSelectOptions, AREA_UNITS } from "./constants";
import { convertArea } from "./utils";

const AreaConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Area Converter"
      subHeading="Quickly convert area between sq. meter, sq mile, sq. foot etc. etc."
      selectOptions={AreaSelectOptions}
      fromDefaultValue={AREA_UNITS.SQ_KILOMETER}
      toDefaultValue={AREA_UNITS.SQ_METER}
      convertFunction={convertArea}
    />
  );
};

export default AreaConverter;
