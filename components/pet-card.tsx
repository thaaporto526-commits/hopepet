"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Heart, Calendar, MapPin } from "lucide-react";

const statusConfig = {
  available: {
    label: "Disponível",
    variant: "default",
  },
  in_analysis: {
    label: "Em análise",
    variant: "secondary",
  },
  adopted: {
    label: "Adotado",
    variant: "default",
  },
} as const;

export interface Pet {
  id: number;
  name: string;
  image: string;
  specie: string;
  race: string;
  gender: string;
  age: string;
  city: string;
  state: string;
  status: string;
}

type PetCardProps = {
  pet: Pet;
};

const petLinks: Record<string, string> = {
  Thor: "/adoption/thor",
  Luna: "/adoption/luna",
  Bob: "/adoption/bob",
  Mel: "/adoption/mel",
};

export default function PetCard({ pet }: PetCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const currentStatus =
    statusConfig[pet.status as keyof typeof statusConfig];

  const petLink = petLinks[pet.name] || "/adoption";

  return (
    <Card className="w-[85vw] md:w-full min-w-70 shrink-0 snap-center pt-0 hover:-translate-y-0.5 hover:shadow-lg transition-all">
      <div className="relative aspect-square">
        <Link href={petLink}>
          <Image
            src={pet.image}
            alt={`Foto de ${pet.name}`}
            fill
            className="object-cover"
          />
        </Link>

        <Badge variant={currentStatus.variant} className="absolute left-3 top-3">
          {currentStatus.label}
        </Badge>

        <Button
          variant="basic"
          size="icon-sm"
          className="absolute right-3 top-3"
          onClick={() => setIsFavorited(!isFavorited)}
          aria-label={
            isFavorited
              ? `Remover ${pet.name} dos favoritos`
              : `Adicionar ${pet.name} aos favoritos`
          }
        >
          <Heart
            className={`w-4 h-4 transition-all duration-300 ${
              isFavorited
                ? "text-primary fill-primary"
                : "text-muted-foreground"
            }`}
          />
        </Button>
      </div>

      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="text-xl font-semibold text-card-foreground">
          {pet.name}
        </h3>

        <Badge variant="outline">{pet.specie}</Badge>
      </CardHeader>

      <CardContent className="flex flex-col">
        <p className="text-sm text-muted-foreground mb-3">
          {`${pet.race} - ${pet.gender}`}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {pet.age}
          </span>

          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {`${pet.city}, ${pet.state}`}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center mt-auto">
        <Button
          className="w-full font-semibold"
          render={<Link href={petLink} />}
        >
          {pet.status === "available" ? "Quero adotar" : "Conhecer"}
        </Button>
      </CardFooter>
    </Card>
  );
}
