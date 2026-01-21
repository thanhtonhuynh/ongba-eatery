import { Person } from "@/_types";
import { Card } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  person: Person;
};

export function PersonCard({ person }: Props) {
  return (
    <Card className="text-gold bg-transparent px-6 py-3">
      <div>
        <Image
          src={person.imgSrc}
          alt={person.name}
          width={150}
          height={150}
          className="border-gold rounded-full border object-cover"
        />
      </div>

      <div className="text-center">
        <h3 className="font-titoli text-2xl font-bold tracking-wider uppercase">{person.name}</h3>
        <p className="italic">{person.role}</p>
      </div>
    </Card>
  );
}
