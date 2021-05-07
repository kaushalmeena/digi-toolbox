import { Button } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { Container } from "./styles";

type SwitchContainerProps = {
  handleSwitchAction: () => void;
};

const SwitchContainer: FunctionComponent<SwitchContainerProps> = (
  props: SwitchContainerProps
) => {
  return (
    <Container>
      <Button
        large
        title="Switch"
        icon="arrows-horizontal"
        onClick={props.handleSwitchAction}
      />
    </Container>
  );
};

export default SwitchContainer;
