import { Card, Section, SectionCard, Tag } from "@blueprintjs/core";
import Link from "next/link";
import { CATEGORY_ICONS, GroupedTools } from "@/constants/tools";

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
                href={tool.path}
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
