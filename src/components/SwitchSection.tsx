import { Button } from "@blueprintjs/core";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    transform: rotate(90deg);
  }
`;

type SwitchSectionProps = {
  switchURL: string;
};

export default function SwitchSection({ switchURL }: SwitchSectionProps) {
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
