import { DrinkItem } from "@/_data/coquitlam-drink-items";
import { MenuSectionFrame } from "../../menu-section";
import { DrinkItemCard } from "./drink-item-card";

type Props = {
  id: string;
  index?: number;
  title: string;
  description?: string;
  note?: string;
  items: DrinkItem[];
};

/** Like MenuSection, but lays the item cards out in a single column. */
export function DrinkSection({ id, index, title, description, note, items }: Props) {
  if (items.length === 0) {
    return null;
  }

  return (
    <MenuSectionFrame id={id} index={index} title={title} description={description} note={note}>
      <div className="space-y-8">
        {items.map((item) => (
          <DrinkItemCard key={item.id} item={item} />
        ))}
      </div>
    </MenuSectionFrame>
  );
}
