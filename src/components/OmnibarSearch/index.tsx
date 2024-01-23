import { Tools } from "@/constants";
import { Tool } from "@/types";
import { MenuItem } from "@blueprintjs/core";
import { Classes, ItemRenderer, Omnibar } from "@blueprintjs/select";
import { useRouter } from "next/navigation";
import { createGlobalStyle } from "styled-components";
import { areToolsEqual, filterTool, getToolItemProps } from "./utils";

type OmnibarSearchProps = {
  isOpen: boolean;
  onClose: () => void;
};

const OmnibarGlobalStyle = createGlobalStyle`
  .${Classes.OMNIBAR} {
    left: 0px;
    right: 0px;
    margin: 0px auto;
    max-width: 500px;
    width: calc(100vw - 20px);
  }
`;

export default function OmnibarSearch({ isOpen, onClose }: OmnibarSearchProps) {
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
    <>
      <OmnibarGlobalStyle />
      <Omnibar<Tool>
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
    </>
  );
}
