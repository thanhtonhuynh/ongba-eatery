import { BADGE_META, DIETARY_META, MenuItem } from "@/_types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  item: MenuItem;
};

export function ItemCard({ item }: Props) {
  return (
    <Card className="text-gold border-gold/50 relative flex flex-row items-start border bg-transparent px-6 py-4">
      {/* New badge */}
      {item.badge && (
        <div className="absolute top-3 left-4">
          {BADGE_META[item.badge].iconSrc ? (
            <>
              <Image
                src={BADGE_META[item.badge].iconSrc!}
                alt={BADGE_META[item.badge].sr}
                width={16}
                height={16}
                className="inline-flex"
              />
              <span className="sr-only">{BADGE_META[item.badge].sr}</span>
            </>
          ) : (
            <span className="font-titoli font-bold uppercase">{BADGE_META[item.badge].label}</span>
          )}
        </div>
      )}

      {item.imgSrc && (
        <div className="border-gold relative aspect-square w-36 shrink-0 rounded-full border xl:w-44">
          <Image src={item.imgSrc} alt={item.title} fill className="rounded-full object-cover" />
        </div>
      )}

      <div className="flex-1">
        <CardHeader className="px-0">
          {/* Dish name */}
          <CardTitle className="font-bricolage-grotesque flex items-start justify-between font-semibold">
            <div className="flex flex-col gap-1 tracking-tight uppercase">
              <span>{item.title}</span>
              {item.subtitle && <span>{item.subtitle}</span>}
            </div>
            <span>{item.price}</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="mt-4 space-y-2 px-0">
          {/* Dietary tags */}
          {item.dietary && item.dietary.length > 0 && (
            <div className="flex gap-6">
              {item.dietary.map((tag) => {
                const meta = DIETARY_META[tag];

                return (
                  <span key={tag} className="flex items-center gap-1">
                    <Image
                      src={meta.iconSrc}
                      alt={meta.label}
                      width={16}
                      height={16}
                      className="inline-flex"
                    />
                    {meta.label}
                  </span>
                );
              })}
            </div>
          )}

          {/* Dish description */}
          {item.description && <p className="whitespace-pre-line">{item.description}</p>}
        </CardContent>
      </div>
    </Card>
  );
}
