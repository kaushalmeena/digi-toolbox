import { Button } from "@blueprintjs/core";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { Container } from "./styles";

type SwitchSectionProps = {
  switchURL: string;
};

function SwitchSection({ switchURL }: SwitchSectionProps) {
  const router = useRouter();

  const handleSwitchAction = () => {
    router.push(switchURL);
  };

  return (
    <Container>
      <Button
        large
        title="Switch"
        icon="arrows-horizontal"
        onClick={handleSwitchAction}
      />
    </Container>
  );
}

export default memo(SwitchSection);
