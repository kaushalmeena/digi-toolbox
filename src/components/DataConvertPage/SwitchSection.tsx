import { Button } from "@blueprintjs/core";
import { useRouter } from "next/navigation";
import React, { memo } from "react";
import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    transform: rotate(90deg);
  }
`;

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
