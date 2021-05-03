import { Button } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

type MiddleContainerProps = {
  switchURL: string;
  handleSwitchAction: () => void;
};

const MiddleContainer: FunctionComponent<MiddleContainerProps> = (
  props: MiddleContainerProps
) => {
  return (
    <Container>
      {props.switchURL ? (
        <>
          <Button
            large
            title="Switch"
            icon="arrows-horizontal"
            className="show-md"
            onClick={props.handleSwitchAction}
          />
          <Button
            large
            title="Switch"
            icon="arrows-vertical"
            className="hide-md"
            onClick={props.handleSwitchAction}
          />
        </>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 20px 70px 20px;
  min-width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & .show-md {
    display: inline-flex;
  }
  & .hide-md {
    display: none;
  }
  @media (max-width: 760px) {
    padding: 10px 0px 10px 0px;
    width: 100%;
    & .show-md {
      display: none;
    }
    & .hide-md {
      display: inline-flex;
    }
  }
`;

export default MiddleContainer;
