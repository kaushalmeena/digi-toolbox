import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ToolHeader } from "@/components/layout/tool-header";
import { loadTool } from "@/tools/loaders";
import { getTool, TOOLS, toolHref } from "@/tools/registry";

type Props = { params: Promise<{ tool: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ tool: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = getTool((await params).tool);
  if (!tool) {
    return {};
  }
  const description = `${tool.description} Free, fast and private — runs entirely in your browser.`;
  return {
    title: tool.name,
    description,
    keywords: tool.keywords ? [...tool.keywords] : undefined,
    alternates: { canonical: toolHref(tool.slug) },
    openGraph: { title: tool.name, description, url: toolHref(tool.slug) }
  };
}

export default async function ToolPage({ params }: Props) {
  const tool = getTool((await params).tool);
  if (!tool) {
    notFound();
  }
  const { default: ToolScreen } = await loadTool(tool.slug);

  return (
    <>
      <ToolHeader tool={tool} />
      <div className="flex min-h-0 flex-1 flex-col p-3 md:p-4">
        <ToolScreen />
      </div>
    </>
  );
}
