import { Button } from "@blueprintjs/core";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { MiddleContainer } from "../../../styles";
import { ButtonContainer } from "./styles";

type SwitchSectionProps = {
  switchURL?: string;
};

const SwitchSection: FunctionComponent<SwitchSectionProps> = (
  props: SwitchSectionProps
) => {
  const router = useRouter();

  const handleSwitchAction = () => {
    router.push(props.switchURL);
  };

  return (
    <MiddleContainer>
      {props.switchURL ? (
        <ButtonContainer>
          <Button
            large
            title="Switch"
            icon="arrows-horizontal"
            onClick={handleSwitchAction}
          />
        </ButtonContainer>
      ) : null}
    </MiddleContainer>
  );
};

export default SwitchSection;
