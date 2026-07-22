import { Button, type IconName, type MaybeElement } from "@blueprintjs/core";

export type ButtonOption = {
  title: string;
  icon: IconName | MaybeElement;
  onClick: () => void;
};

type ButtonSectionProps = {
  buttons: ButtonOption[];
};

export default function ButtonSection({ buttons }: ButtonSectionProps) {
  return (
    <div className="mt-5 flex items-center">
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
