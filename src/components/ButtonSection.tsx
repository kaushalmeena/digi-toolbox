import { Button, type IconName, type MaybeElement } from "@blueprintjs/core";

export type ButtonOption = {
  title: string;
  icon: IconName | MaybeElement;
  onClick: () => void;
};

export default function ButtonSection({
  buttons
}: {
  buttons: ButtonOption[];
}) {
  return (
    <div className="mt-5 flex items-center gap-1">
      {buttons.map((button) => (
        <Button
          className="mr-2.5"
          size="large"
          key={button.title}
          {...button}
        />
      ))}
    </div>
  );
}
