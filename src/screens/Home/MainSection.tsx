import { Card, Section, SectionCard, Tag } from "@blueprintjs/core";
import {
  CalculatorIcon,
  CodeBlockIcon,
  CodeIcon,
  FontIcon,
  GridViewIcon,
  ListIcon,
  ThIcon
} from "@blueprintjs/icons";
import Link from "next/link";
import type { ReactElement } from "react";
import { GroupedTools } from "@/constants/tools";
import { ToolCategory } from "@/types/tools";

const CATEGORY_ICONS: Record<ToolCategory, ReactElement> = {
  [ToolCategory.JSON]: <CodeIcon />,
  [ToolCategory.CSV]: <ThIcon />,
  [ToolCategory.XML]: <CodeBlockIcon />,
  [ToolCategory.YAML]: <ListIcon />,
  [ToolCategory.TEXT]: <FontIcon />,
  [ToolCategory.CONVERTER]: <CalculatorIcon />,
  [ToolCategory.OTHER]: <GridViewIcon />
};

export default function MainSection() {
  return (
    <div className="pt-2 pb-15">
      {GroupedTools.map((item) => (
        <Section
          className="mt-2.5"
          collapsible
          collapseProps={{ defaultIsOpen: true }}
          key={item.category}
          icon={CATEGORY_ICONS[item.category]}
          title={item.name}
          rightElement={
            <Tag minimal round>
              {item.tools.length}
            </Tag>
          }
        >
          <SectionCard className="flex flex-wrap gap-2.5">
            {item.tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.url}
                className="hover:no-underline"
              >
                <Card
                  className="min-w-52 text-center font-semibold transition-transform hover:-translate-y-0.5"
                  interactive
                  elevation={1}
                >
                  {tool.name}
                </Card>
              </Link>
            ))}
          </SectionCard>
        </Section>
      ))}
    </div>
  );
}
