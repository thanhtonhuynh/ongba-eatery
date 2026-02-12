import { Person } from "@/_types";
import { Card } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  person: Person;
};

export function PersonCard({ person }: Props) {
  return (
    <Card className="text-gold bg-transparent px-4 py-3 sm:px-6">
      <div className="flex justify-center">
        <Image
          src={person.imgSrc}
          alt={person.name}
          width={150}
          height={150}
          className="border-gold size-24 rounded-full border object-cover sm:size-32 md:size-[150px]"
        />
      </div>

      <div className="mt-2 text-center sm:mt-3">
        <h3 className="font-titoli text-lg font-bold tracking-wider uppercase sm:text-xl md:text-2xl">
          {person.name}
        </h3>
        <p className="text-sm italic sm:text-base">{person.role}</p>
      </div>
    </Card>
  );
}
