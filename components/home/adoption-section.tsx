import Link from "next/link";
import PetCard from "@/components/pet-card";
import { ArrowRight } from "lucide-react";
import { playfair } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const pets = [
  {
    id: 1,
    name: "Thor",
    image: "/thor.png",
    specie: "Cachorro",
    race: "Spitz Alemão",
    gender: "Macho",
    age: "1 anos",
    city: "São Paulo",
    state: "SP",
    status: "available",
  },
  {
    id: 2,
    name: "Luna",
    image: "/luna.png",
    specie: "Gato",
    race: "SRD",
    gender: "Fêmea",
    age: "2 ano",
    city: "São Paulo",
    state: "SP",
    status: "available",
  },
  {
    id: 3,
    name: "Bob",
    image: "/bob.png",
    specie: "Cachorro",
    race: "Vira-Lata",
    gender: "Macho",
    age: "3 anos",
    city: "Guarulhos",
    state: "SP",
    status: "available",
  },
  {
    id: 4,
    name: "Mel",
    image: "/mel.png",
    specie: "Gato",
    race: "Siamês",
    gender: "Fêmea",
    age: "4 anos",
    city: "São Paulo",
    state: "SP",
    status: "in_analysis",
  },
];

export default function Adoption() {
  return (
    <Section id="adoption">
      <div className="flex flex-col items-center justify-center text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Adote um amigo
        </span>

        <h2
          className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mt-2 mb-3`}
        >
          Animais Disponíveis para Adoção
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-2xl mb-8">
          Conheça nossos peludinhos que estão à procura de um lar cheio de amor. Cada adoção transforma duas vidas.
        </p>

        <div className="w-full overflow-x-auto pb-4 pt-2 flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 scrollbar-none snap-x mb-8">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>

        <Button
          variant="outline"
          className="px-6 py-5 rounded-xl font-semibold"
          render={<Link href="/adoption" />}
        >
          <span>Ver todos os animais</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </Section>
  );
}
