import { Tools } from "@/constants/tools";
import { Card } from "@blueprintjs/core";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 60px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 20px;
  gap: 15px;
`;

const StyledCard = styled(Card)`
  min-width: 222px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

export default function MainSection() {
  return (
    <Container>
      <CardContainer>
        {Tools.map((item) => (
          <Link key={item.url} href={item.url}>
            <StyledCard interactive elevation={2}>
              {item.name}
            </StyledCard>
          </Link>
        ))}
      </CardContainer>
    </Container>
  );
}
