import { Button } from "@blueprintjs/core";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { Container } from "./styles";

type SwitchContainerProps = {
  switchURL: string;
};

const SwitchContainer: FunctionComponent<SwitchContainerProps> = (
  props: SwitchContainerProps
) => {
  const router = useRouter();

  const handleSwitchAction = () => {
    router.push(props.switchURL);
  };

  return (
    <Container>
      {props.switchURL ? (
        <>
          <Button
            large
            title="Switch"
            icon="arrows-horizontal"
            className="show-md"
            onClick={handleSwitchAction}
          />
          <Button
            large
            title="Switch"
            icon="arrows-vertical"
            className="hide-md"
            onClick={handleSwitchAction}
          />
        </>
      ) : null}
    </Container>
  );
};

export default SwitchContainer;
