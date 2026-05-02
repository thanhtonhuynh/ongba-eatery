# Family Set Tab — UI Redesign Brief

**Audience:** designer/agent picking up the visual + component design of the **Family Set** tab on the Coquitlam menu page.
**Engineer ownership:** content shape and data are owned by engineering; this brief is for **layout, hierarchy, and reusable component design**.
**Scope:** only the **Family Set** outer tab. Do **not** touch **All-day** or **Desserts & Drinks** tabs.

---

## 1. Where this lives

- Page: `app/menu/page.tsx` → `app/menu/menu-page-tabs.tsx` → outer `Tabs` component (line variant). The **Family Set** outer tab renders `app/menu/family-set-content.tsx`.
- Family Set has **two sets**: **For 2** and **For 4**. They are navigated via in-page anchor links rendered by `app/menu/menu-nav.tsx` (the same nav style as the All-day tab — keep this, do not replace with shadcn tabs).
- The two sets sit inside `MenuSectionFrame` (defined in `app/menu/menu-section.tsx`). The frame already provides:
  - Outer container, alternating `bg-dark-wine` background per `index`.
  - `OrnamentLine` accent.
  - Optional H2 title and pre-line description.

The redesign should keep using `MenuSectionFrame` for the outer shell and **only redesign the inner content** (course flow, dish blocks, pairing visualization, dessert picker). If the frame needs a second variant (e.g. a different inner padding or header treatment), add it to `MenuSectionFrame` rather than building a parallel shell.

---

## 2. Why redesign

The current Family Set looks too similar to a generic à la carte list. It needs a layout that:

1. Communicates **prix-fixe storytelling**: this is a curated multi-course experience, not a checklist.
2. Makes **course progression** (1st → 2nd → 3rd → dessert) immediately scannable.
3. Makes **choice mechanics** visually unambiguous:
   - `OR` between mutually-exclusive options inside a course.
   - `AND one of` for the third course of For 2 (one fixed dish + one chosen dish from a group).
   - `Choose one` for the noodle soup row in For 4 (any soup from the Classic Noodle Soup menu).
4. Lists actual **dessert options** so guests can choose intelligently — not just `"Choice of 1 dessert"`.
5. Feels visually distinct from the All-day tab while staying within the same brand system.

---

## 3. Content requirements (source of truth)

Use `_data/coquitlam-family-set.ts` for set data and `_data/coquitlam-desserts-drinks.ts` for desserts. **Do not duplicate strings**; import from data files. If new fields are needed, expand the types in `_data/coquitlam-family-set.ts` and update the data, then consume.

### 3.1 Header strip (shared across For 2 and For 4)

- Set name: `"Family Style Set"` (`familySetForX.heading`).
- Price line: `"For 2 — $50 per person"` / `"For 4 — $50 per person"` (`familySetForX.priceLine`).
- The header should feel like a **price card / banner**, distinct from the section title `H2`. It should communicate *one price, one experience* at a glance.

### 3.2 For 2 — course-by-course

Render exactly three courses, then dessert:

1. **1st course — choice of one** (`firstCourse.options`, length 2)
   - Cheesy Coconut Garlic Shrimp **OR** Fish Sauce Glazed Chicken Wings.
2. **2nd course — choice of one** (`secondCourse.options`, length 2)
   - Butter Beef Tartare **OR** Ông's Garden Burrata Salad.
3. **3rd course** (`thirdCourse`)
   - Always-included **fixed** dish: Ba's Grilled Caramelized Pork Chop (`thirdCourse.fixed`).
   - **AND** one of three options (`thirdCourse.oneOf`): Tomato Soft Shell Crab Vermicelli, Hà Nội Smoky Grilled Pork Vermicelli, Beef Ragu Pappardelle.
   - The `AND one of` mechanic must be visually obvious (the diner gets the pork chop *plus* exactly one of the three).
4. **Dessert** — `dessertLine` is `"Choice of 1 dessert"`. Render the actual dessert options (see §3.4).

### 3.3 For 4 — group-style

Render in this order:

1. **Included for the table** (`included`, length 6) — sequence, no choice. Use a list/divider treatment, not OR.
   - Truffle Duck Pate, Butter Beef Tartare, Fish Sauce Glazed Chicken Wings, Ông's Garden Burrata Salad, Ba's Grilled Caramelized Pork Chop, Coconut Curry Mussel with Fries.
2. **Noodle soup — choose one**
   - Intro line: `noodleSoupIntro` (`"Wok Smokey Beef Pho or any Classic Noodle Soup from our menu:"`).
   - List **all items** from `_data/coquitlam-menu-items/classic-noodle-soup.ts` so the For 4 set always reflects the live noodle soup menu.
   - Show name (English subtitle), Vietnamese title (smaller), and price aligned right. The price helps customers compare options when picking.
3. **Entrée — choose one** (`entreeChoices`, length 3)
   - Tomato Soft Shell Crab Vermicelli, Hà Nội Smoky Grilled Pork Vermicelli, Beef Ragu Pappardelle.
   - Same OR mechanic as For 2 second course.
4. **Dessert** — `dessertLine` is `"Choice of 2 desserts"`. Render the actual dessert options (see §3.4).

### 3.4 Dessert picker (NEW — replaces the static line)

Both For 2 and For 4 must list desserts from `coquitlamDesserts` (`_data/coquitlam-desserts-drinks.ts`). Currently:

- `cq_vietnamese_coffee_flan` — Caramen Cà Phê / Vietnamese Coffee Flan, $8
- `cq_pandan_basque_cheesecake` — Bánh phômai lá dứa / Coconut Pandan Basque Cheesecake, $10 (dairy)

Rules:

- Show the **same dish info** as elsewhere: English subtitle (primary), Vietnamese title (secondary), short description, dietary notes if any.
- Do **not** show prices in the dessert picker — desserts are included in the set price; showing à la carte prices alongside a prix-fixe set is misleading. (Engineer can pass a `showPrice={false}` prop to the dish renderer.)
- Above the picker, show the count line from data: `"Choice of 1 dessert"` (For 2) or `"Choice of 2 desserts"` (For 4). This number determines pluralization and any visual affordance (e.g. `1 of 2` indicators are optional, not required).
- The picker is **informational** (not interactive selection in v1) — the goal is to communicate the available choices clearly. No state, no checkboxes.

### 3.5 Dish information model

Every dish block must support, in this priority order:

1. **English title** (`titleEn` for set dishes; `subtitle` for `MenuItem`s like noodle soups and desserts).
2. **Vietnamese title** (`titleVi` / `title`).
3. **Description** (optional, 1–2 lines).
4. **Allergen note** (optional, italic, e.g. `"Contains peanut."`).

Some sources use `MenuItem` (noodle soups, desserts) and others use `FamilySetDish`. The redesign should produce a **single dish-block component** that accepts a normalized shape, with a small adapter at the call site. Keep the block compact and consistent across courses so the eye can scan vertically.

---

## 4. Design system (use these — do not introduce new tokens)

### 4.1 Color tokens (from `app/globals.css`)

- `--darkest-wine` — page surface.
- `--dark-wine` — alternating section background (already applied by `MenuSectionFrame` on even indices).
- `--wine` / `--dark-blood` — slightly elevated panels (use sparingly to highlight a fixed dish or a price banner).
- `--gold` — borders, accent strokes, dividers (typically at low opacity, e.g. `border-gold/20`, `border-gold/40`).
- `--light-gold` — emphasis/headings inside cards (course labels, section eyebrows).
- `--secondary` — body and Vietnamese subtitle text, muted notes.
- `--foreground` — primary dish names (English).

Tailwind has these mapped via the `@theme inline` block (e.g. `bg-dark-wine`, `text-light-gold`, `border-gold/25`). **Do not** hardcode hex/oklch values; do not introduce new color variables.

### 4.2 Typography

- `font-bricolage-grotesque` — display, course eyebrows, set name banner.
- `font-titoli` — reserved for h1-style brand moments (use sparingly, e.g. set name on the price banner, max once per set).
- Default body uses the Geist sans stack from layout.
- Use existing `Typography` component (`components/typography.tsx`) where possible; tailwind classes are fine for inline tweaks.

### 4.3 Radii, spacing, ornament

- `rounded-sm` to `rounded-lg` for inner cards. Avoid heavy `rounded-2xl` unless you're styling the price banner.
- `OrnamentLine` (already in `MenuSectionFrame`) signals "set" — do not stack additional ornament lines per course; use border + spacing for course separation.
- Section vertical rhythm: keep consistent spacing using Tailwind `space-y-*` scales already used (`space-y-10`, `space-y-12`).

### 4.4 Iconography

There is no icon library beyond hugeicons. If using icons (e.g. small dot, slash, fork-and-knife), prefer **inline SVG** or pure CSS marks. Keep icons monotone gold/light-gold.

---

## 5. Reusable components (deliver these)

Create the following in `app/menu/family-set/` (new folder, co-located with `family-set-content.tsx`). Do NOT redefine these inline — every block should be a named export.

| Component | Purpose | Notes |
|---|---|---|
| `FamilySetHeader` | Set name + price banner. | Variants: `for-2`, `for-4`. Single source of truth for the price line. |
| `FamilySetCourse` | Wrapper around a single course (eyebrow label + body slot). | Replaces the current `FamilySetCourseCard`. Should accept `step` (1, 2, 3, …), `label`, `helper` (e.g. `"choose one"`), and `children`. |
| `DishBlock` | Normalized dish renderer. | Props: `{ titleEn, titleVi, description?, note?, dietary?, price?, showPrice? }`. Used for set dishes, noodle soup rows, dessert options. |
| `OrChoiceList` | Vertical OR group. | Renders `DishBlock` items separated by an `OrDivider`. Accept a `as="ul"` for semantic lists. |
| `AndOneOf` | Composition for the For 2 third course: one fixed dish + an OR group beneath. | Visualize the relationship clearly (e.g. plus mark, vertical connector, indented sub-card). |
| `LiveNoodleSoupList` | For 4 only. Pulls live data from `classicNoodleSoup`. | Shows price aligned right (this is one of the few places to show a price — to help compare). |
| `IncludedList` | For 4 only. Sequence list of always-included dishes. | Compact dividers, no OR. |
| `DessertPicker` | New. Lists `coquitlamDesserts`. | Accepts `count: 1 \| 2` to render the correct heading and any subtle indicator. No prices. |
| `OrDivider` | Tiny right- or center-aligned `or` rule. | Already exists; refine, don't fork. |
| `FamilySetDisclaimer` | Italic centered note at the end of the tab. | Pulls from `familySetDisclaimer`. |

Component constraints:

- All components must be **presentational** (no data fetching, no client state). The Family Set tab is a server-rendered page; only `family-set-content.tsx` is currently `"use client"` and that's only because it lives inside the `Tabs` client boundary.
- No CSS-in-JS, no inline `style` objects. Tailwind classes only, using design tokens from §4.
- Each component must accept a `className` so the caller can compose layout-level overrides without forking the component.
- Avoid prop drilling: if a course has a `helper` like `"choose one"` it should be a prop on `FamilySetCourse`, not a separate child.

---

## 6. Layout & hierarchy guidance

This is design direction, not a final spec. Pick the strongest version that fits the brand.

1. **Price banner first.** Open each set with a confident horizontal banner (`Family Style Set` + `For 2 — $50 / person`). This is the moment that justifies the prix-fixe context. Visually distinct from the H2 — consider gold hairline rules above and below, centered text, mixed weight typography.

2. **Course rhythm.** Each course is a labeled block with a clear **eyebrow** (`1ST COURSE — CHOICE OF ONE`), then dish content. Steps could be shown as small numerals (`01`, `02`, `03`) in `light-gold` so the diner instantly perceives the order.

3. **OR choices.** Use a right-aligned or centered `or` token between options inside a course. Make sure it doesn't look like a heading. Consider a thin diagonal slash or vertical rule with the `or` floating at its midpoint.

4. **AND one of (For 2 third course).** This is the most complex structure. Visualize the fixed dish as the **anchor** with the three options branching beneath it. A nested card or a left-rule + label `"And one of"` works; pick a treatment that makes the relationship obvious without a footnote.

5. **Live noodle soup list (For 4).** Keep it dense and scannable: dish name left, Vietnamese subtle, price right (tabular). Use dotted or hairline gold dividers. This block is unique to For 4 and should look like a "menu within a menu".

6. **Dessert picker (NEW).** Place it as the final course. Render desserts in the same dish-block format as the rest of the set. Show the count line (`Choice of 1 dessert` / `Choice of 2 desserts`) as the eyebrow. Do **not** show prices.

7. **Disclaimer.** Italic, muted, centered, in its own minimal section after the dessert picker. Already in `MenuSectionFrame` index `2`; keep that placement.

8. **Vertical rhythm.** Keep consistent spacing between courses (`space-y-10` / `space-y-12`) and inside courses (`space-y-4`). Don't over-decorate; the tone is restrained Vietnamese-modern.

---

## 7. Responsive behavior

- **Mobile first.** All courses stack vertically. Price banner shrinks gracefully — keep the price line on its own line below the set name on mobile.
- **Tablet (`sm`–`md`).** Vertical course flow, generous padding, 1-column dish blocks.
- **Desktop (`lg`+).**
  - For 2 third course: consider a 2-column layout (anchor dish on the left, `oneOf` group on the right) so the AND/OR relationship is immediately legible without scrolling.
  - For 4 included list: 2 columns is acceptable if it keeps each row readable, otherwise stay in 1 column.
  - Noodle soup list: 1 column with name/price split is preferred for menu readability; 2 columns OK if dense enough.
- **Print / dense screens (4K).** Don't let max-width balloon — `MenuSectionFrame` already uses `maxWidth="7xl"` on the inner container; respect that.

---

## 8. Accessibility

- Course labels (`1st course — choice of one`) must be heading-tagged (`h3` or `h4`) so screen readers can navigate the structure. The current implementation uses `h3`; keep semantic heading levels under the `h2` from `MenuSectionFrame`.
- The `or` divider should be `role="separator"` (or omitted from a11y tree if purely decorative — but content readers should still understand the choice).
- Dish notes (`Contains peanut.`) are critical allergen info — never reduce contrast below `text-secondary` and never hide on mobile.
- The `MenuNav` anchor links must keep their visible focus ring. Don't disable outline styles globally.

---

## 9. Anti-patterns (do not do)

- Do **not** convert the in-set sub-navigation to shadcn `Tabs`. The two sets must be visible together via the page's `MenuNav` anchor scroll, matching the All-day tab's interaction model.
- Do **not** hide the noodle soup list behind a disclosure. Customers need to see all options inline.
- Do **not** use mock food photography or stock imagery. The brand currently does not use food photos in the menu; redesign should remain typographic + ornamental.
- Do **not** introduce competing accent colors (no greens, blues, etc.). Stay strictly in the gold + wine system.
- Do **not** show à la carte prices in the dessert picker. Set price already covers it.
- Do **not** duplicate strings between the component and the data file — always read from `_data/coquitlam-family-set.ts` and `_data/coquitlam-desserts-drinks.ts`.
- Do **not** break the `MenuSectionFrame` shell or the alternating background pattern.

---

## 10. Out of scope

- Tab switcher styling (outer 3 tabs) — owned elsewhere.
- All-day tab redesign.
- Desserts & Drinks tab redesign.
- Booking/reservation interactions.
- Multilingual switching beyond the existing Vi+En pairing.
- Animations beyond subtle hover / focus transitions on links.

---

## 11. Acceptance criteria

A redesign is accepted when:

1. For 2 clearly communicates: 3 courses + 1 dessert, with one OR per first two courses and one AND-one-of in the third.
2. For 4 clearly communicates: 6 included dishes for the table, choose 1 noodle soup (live list with prices), choose 1 entrée (OR of 3), choose 2 desserts.
3. Both sets list **actual desserts** from `coquitlamDesserts` (not just a count).
4. All visible strings come from the existing data files; no hard-coded duplicates in the component layer.
5. Components live under `app/menu/family-set/` and are individually exported, named, and documented with JSDoc one-liners.
6. Only design tokens from `app/globals.css` are used — no new colors, no inline styles, no hex literals.
7. `tsc --noEmit` passes; ESLint passes for `app/menu/**`.
8. Mobile (≤640px), tablet, and desktop (≥1024px) layouts are demonstrably distinct and remain readable.
9. Allergen notes are visible on every breakpoint and never below `text-secondary` contrast.

---

## 12. Files & references

- Entry point: `app/menu/family-set-content.tsx`
- Frame: `app/menu/menu-section.tsx` (`MenuSectionFrame`)
- Anchor nav: `app/menu/menu-nav.tsx`
- Outer tabs: `app/menu/menu-page-tabs.tsx`
- Set data: `_data/coquitlam-family-set.ts`
- Dessert data: `_data/coquitlam-desserts-drinks.ts` (`coquitlamDesserts`)
- Live noodle soups: `_data/coquitlam-menu-items/classic-noodle-soup.ts`
- Design tokens: `app/globals.css`
- Typography component: `components/typography.tsx`
- Container component: `components/container.tsx`
- Decorative line: `components/deco/ornament-line.tsx`
