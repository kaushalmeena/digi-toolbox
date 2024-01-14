import { GroupedTools } from "@/constants";
import { Card, Section, SectionCard } from "@blueprintjs/core";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 60px;
`;

const StyledSection = styled(Section)`
  margin-top: 10px;
`;

const StyledSectionCard = styled(SectionCard)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
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
      {GroupedTools.map((item) => (
        <StyledSection
          collapsible
          collapseProps={{ defaultIsOpen: false }}
          key={item.category}
          title={item.name}
        >
          <StyledSectionCard>
            {item.tools.map((tool) => (
              <Link key={tool.name} href={tool.url}>
                <StyledCard interactive elevation={1}>
                  {tool.name}
                </StyledCard>
              </Link>
            ))}
          </StyledSectionCard>
        </StyledSection>
      ))}
    </Container>
  );
}
