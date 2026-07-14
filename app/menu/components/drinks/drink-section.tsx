import { MenuItem } from "@/_types";
import { ItemCard } from "../../item-card";
import { MenuSectionFrame } from "../../menu-section";

type Props = {
  id: string;
  index?: number;
  title: string;
  description?: string;
  note?: string;
  items: MenuItem[];
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
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </MenuSectionFrame>
  );
}
