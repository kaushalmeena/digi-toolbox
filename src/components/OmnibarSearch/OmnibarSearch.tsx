import { MenuItem } from "@blueprintjs/core";
import { type ItemRenderer, Omnibar } from "@blueprintjs/select";
import { useRouter } from "next/navigation";
import { Tools } from "@/constants/tools";
import type { Tool } from "@/types/tools";
import { areToolsEqual, filterTool, getToolItemProps } from "./utils";

export default function OmnibarSearch({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  const renderTool: ItemRenderer<Tool> = (item, props) => {
    if (!props.modifiers.matchesPredicate) {
      return null;
    }
    return <MenuItem key={item.name} {...getToolItemProps(item, props)} />;
  };

  const handleToolSelect = (item: Tool) => {
    router.push(item.url);
    onClose();
  };

  return (
    <Omnibar<Tool>
      className="app-omnibar"
      resetOnSelect
      isOpen={isOpen}
      inputProps={{ placeholder: "Search tools..." }}
      noResults={<MenuItem disabled={true} text="No results." />}
      items={Tools}
      itemPredicate={filterTool}
      itemsEqual={areToolsEqual}
      itemRenderer={renderTool}
      onItemSelect={handleToolSelect}
      onClose={onClose}
    />
  );
}
