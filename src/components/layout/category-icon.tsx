import { cn } from "@/lib/utils";
import { type CategoryId, getCategory } from "@/tools/registry";

const SIZES = {
  sm: "size-5 rounded-[5px] [&_svg]:size-3",
  md: "size-8 rounded-md [&_svg]:size-4",
  lg: "size-10 rounded-lg [&_svg]:size-5"
};

/** A category's icon on its tinted tile — the visual anchor for each tool. */
export function CategoryIcon({
  category,
  size = "sm",
  className
}: {
  category: CategoryId;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const { icon: Icon, tint } = getCategory(category);
  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center",
        tint,
        SIZES[size],
        className
      )}
    >
      <Icon />
    </span>
  );
}
