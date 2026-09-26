import { brunchMenu, dinnerMenu } from "@/_data/coquitlam-menus";
import { coquitlamMenuItems } from "@/_data/coquitlam-menu-items";
import { CoquitlamMenuSection, MenuItem } from "@/_types";

export const coquitlamItemsById: Record<string, MenuItem> = Object.fromEntries(
  coquitlamMenuItems.map((item) => [item.id, item]),
);

// Resolved at module load so a mistyped id fails the build, not just the tab that isn't prerendered.
function resolveSections(sections: CoquitlamMenuSection[]) {
  return sections.map(({ itemIds, ...section }) => ({
    ...section,
    items: itemIds.map((id) => {
      const item = coquitlamItemsById[id];
      if (!item) throw new Error(`Unknown Coquitlam menu item id: "${id}"`);
      return item;
    }),
  }));
}

export const brunchSections = resolveSections(brunchMenu);
export const dinnerSections = resolveSections(dinnerMenu);
