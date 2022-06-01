import { Card } from "@blueprintjs/core";
import React, { Fragment } from "react";
import { NormalIOContainer } from "../../../../../styles";
import { CardBody, GText, RText } from "./styles";

type OutputSectionProps = {
  output: string[][];
};

function OutputSection({ output }: OutputSectionProps) {
  return (
    <NormalIOContainer>
      <Card>
        <CardBody>
          {output.map((item, index) => (
            <Fragment key={`text-${index}`}>
              {item[0] === "*" && item[1]}
              {item[0] === "-" && <RText>{item[1]}</RText>}
              {item[0] === "+" && <GText>{item[1]}</GText>}
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </NormalIOContainer>
  );
}

export default OutputSection;
