import { Button, H1, H3, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { itemPredicate, itemRenderer, ITool, TOOLS } from "./utils";

const ToolSelect = Select.ofType<ITool>();

const Home: FunctionComponent = () => {
  const router = useRouter();

  const handleItemSelect = (tool: ITool) => {
    router.push(tool.url);
  };

  return (
    <>
      <div className="header">
        <H1>Every tool you could want at one place</H1>
        <H3>
          Every tool you need to use PDFs, at your fingertips. All are 100% FREE
          and easy to use!
        </H3>
      </div>
      <div className="body">
        <ToolSelect
          items={TOOLS}
          itemRenderer={itemRenderer}
          itemPredicate={itemPredicate}
          noResults={<MenuItem disabled={true} text="No results." />}
          onItemSelect={handleItemSelect}
        >
          <Button
            large
            text="Select tool"
            icon="wrench"
            rightIcon="caret-down"
          />
        </ToolSelect>
      </div>
      <style jsx>{`
        .header {
          padding: 20px;
          text-align: center;
        }
        .body {
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Home;
