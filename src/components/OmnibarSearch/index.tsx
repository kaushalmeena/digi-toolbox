import { Classes, MenuItem } from "@blueprintjs/core";
import {
  ItemRenderer,
  Omnibar,
  Classes as SelectClasses
} from "@blueprintjs/select";
import { useRouter } from "next/navigation";
import { createGlobalStyle } from "styled-components";
import { Tools } from "../../constants/tools";
import { Tool } from "../../types";
import { areToolsEqual, filterTool, getToolItemProps } from "./utils";

type OmnibarSearchProps = {
  isOpen: boolean;
  onClose: () => void;
};

const OmnibarGlobalStyle = createGlobalStyle`
  .${SelectClasses.OMNIBAR} {
    background-color: #fff;
    border-radius: 2px;
    top: 20vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 500px;
    width: calc(100vw - 20px);
    
    .${Classes.MENU} {
      background-color: transparent;
      border-radius: 0;
      max-height: calc(60vh - 40px);
      overflow: auto;
    }
  }
`;

export default function OmnibarSearch({ isOpen, onClose }: OmnibarSearchProps) {
  const router = useRouter();

  const renderItem: ItemRenderer<Tool> = (item, props) => {
    if (!props.modifiers.matchesPredicate) {
      return null;
    }
    return <MenuItem key={item.name} {...getToolItemProps(item, props)} />;
  };

  const handleItemSelect = (item: Tool) => {
    router.push(item.url);
    onClose();
  };

  return (
    <>
      <OmnibarGlobalStyle />
      <Omnibar<Tool>
        resetOnSelect
        isOpen={isOpen}
        items={Tools}
        itemPredicate={filterTool}
        itemsEqual={areToolsEqual}
        noResults={<MenuItem disabled={true} text="No results." />}
        itemRenderer={renderItem}
        onItemSelect={handleItemSelect}
        onClose={onClose}
      />
    </>
  );
}
