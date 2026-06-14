import { DIETARY_META, type DietaryTag } from "@/_types";
import Image from "next/image";

type Props = {
  tags: DietaryTag[];
};

export function DietaryIcons({ tags }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      {tags.map((tag) => {
        const meta = DIETARY_META[tag];
        return (
          <span
            key={tag}
            className="inline-flex items-center gap-1"
            title={`Contains ${meta.label.toLowerCase()}`}
          >
            <Image
              src={meta.iconSrc}
              alt={meta.label}
              width={14}
              height={14}
              className="opacity-60"
            />
            <span className="sr-only">Contains {meta.label}</span>
          </span>
        );
      })}
    </div>
  );
}
