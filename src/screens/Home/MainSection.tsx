import { Card, Section, SectionCard } from "@blueprintjs/core";
import Link from "next/link";
import { GroupedTools } from "@/constants/tools";

export default function MainSection() {
  return (
    <div className="pt-5 pb-15">
      {GroupedTools.map((item) => (
        <Section
          className="mt-2.5"
          collapsible
          collapseProps={{ defaultIsOpen: false }}
          key={item.category}
          title={item.name}
        >
          <SectionCard className="flex flex-wrap justify-center gap-2.5">
            {item.tools.map((tool) => (
              <Link key={tool.name} href={tool.url}>
                <Card
                  className="min-w-55.5 text-center text-base font-bold"
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
