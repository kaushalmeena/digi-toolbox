import { Button } from "@blueprintjs/core";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { MiddleContainer } from "../../../../../styles";
import { RotateContainer } from "./styles";

type SwitchSectionProps = {
  switchURL: string;
};

function SwitchSection({ switchURL }: SwitchSectionProps) {
  const router = useRouter();

  const handleSwitchAction = () => {
    router.push(switchURL);
  };

  return (
    <MiddleContainer>
      <RotateContainer>
        <Button
          large
          title="Switch"
          icon="arrows-horizontal"
          onClick={handleSwitchAction}
        />
      </RotateContainer>
    </MiddleContainer>
  );
}

export default memo(SwitchSection);
