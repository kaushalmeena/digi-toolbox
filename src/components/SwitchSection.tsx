import { Button } from "@blueprintjs/core";
import { ArrowsHorizontalIcon } from "@blueprintjs/icons";
import { useRouter } from "next/navigation";

export default function SwitchSection({ switchURL }: { switchURL: string }) {
  const router = useRouter();

  const handleSwitchAction = () => {
    router.push(switchURL);
  };

  return (
    <div className="max-md:rotate-90">
      <Button
        size="large"
        title="Switch"
        icon={<ArrowsHorizontalIcon />}
        onClick={handleSwitchAction}
      />
    </div>
  );
}
