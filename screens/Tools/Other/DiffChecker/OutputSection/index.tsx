import { Card } from "@blueprintjs/core";
import React, { Fragment, FunctionComponent } from "react";
import { NormalIOContainer } from "../../../../common/styles";
import { CardBody, GText, RText } from "./styles";

type OutputSectionProps = {
  output: string[][];
};

const OutputSection: FunctionComponent<OutputSectionProps> = (
  props: OutputSectionProps
) => {
  return (
    <NormalIOContainer>
      <Card>
        <CardBody>
          {props.output.map((item, index) => (
            <Fragment key={`text-${index}`}>
              {item[0] === "N" && item[1]}
              {item[0] === "R" && <RText>{item[1]}</RText>}
              {item[0] === "G" && <GText>{item[1]}</GText>}
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </NormalIOContainer>
  );
};

export default OutputSection;
