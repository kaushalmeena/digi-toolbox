import { Card } from "@blueprintjs/core";
import ButtonSection, { type ButtonOption } from "@/components/ButtonSection";
import IOContainer from "@/components/IOContainer";

export default function ImageIOSection({
  buttons,
  value,
  handleImageError
}: {
  buttons: ButtonOption[];
  value: string;
  handleImageError: () => void;
}) {
  return (
    <IOContainer>
      <Card className="flex min-h-77 items-center justify-center">
        {!!value && (
          <img
            className="h-full max-h-66 max-w-full"
            alt="IO-Image"
            src={value}
            onError={handleImageError}
          />
        )}
      </Card>
      <ButtonSection buttons={buttons} />
    </IOContainer>
  );
}
