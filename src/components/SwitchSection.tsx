import { Button } from "@blueprintjs/core";
import { ArrowsHorizontal } from "@blueprintjs/icons";
import { useRouter } from "next/navigation";

type SwitchSectionProps = {
  switchURL: string;
};

export default function SwitchSection({ switchURL }: SwitchSectionProps) {
  const router = useRouter();

  const handleSwitchAction = () => {
    router.push(switchURL);
  };

  return (
    <div className="max-md:rotate-90">
      <Button
        size="large"
        title="Switch"
        icon={<ArrowsHorizontal />}
        onClick={handleSwitchAction}
      />
    </div>
  );
}
