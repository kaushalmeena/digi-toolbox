import { Button } from "@blueprintjs/core";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { MiddleContainer, RotateContainer } from "../../../../styles";

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
        <RotateContainer>
          <Button
            large
            title="Switch"
            icon="arrows-horizontal"
            onClick={handleSwitchAction}
          />
        </RotateContainer>
      ) : null}
    </MiddleContainer>
  );
};

export default SwitchSection;
