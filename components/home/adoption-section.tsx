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
    image: "/hero-dog.png",
    specie: "Cachorro", 
    race: "Vira-lata", 
    gender: "Macho", 
    age: "2 anos", 
    city: "São Paulo", 
    state: "SP",
    status: "available"
  },
  { 
    id: 2,
    name: "Luna", 
    image: "/hero-dog.png", 
    specie: "Gato", 
    race: "Siamês", 
    gender: "Fêmea", 
    age: "1 ano", 
    city: "São Paulo", 
    state: "SP",
    status: "available"
  },
  { 
    id: 3,
    name: "Bob", 
    image: "/hero-dog.png", 
    specie: "Cachorro", 
    race: "Labrador", 
    gender: "Macho", 
    age: "3 anos", 
    city: "Guarulhos", 
    state: "SP",
    status: "available"
  },
  { 
    id: 4,
    name: "Mel", 
    image: "/hero-dog.png", 
    specie: "Gato", 
    race: "Persa", 
    gender: "Fêmea", 
    age: "6 meses", 
    city: "São Paulo", 
    state: "SP",
    status: "in_analysis"
  }
];

export default function Adoption() {
  return(
    <Section id="adoption">
        <div className="flex flex-col items-center justify-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Adote um amigo
          </span>

          <h2 className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mt-2 mb-3`}>
            Animais Disponíveis para Adoção
          </h2>

          <p className="text-lg text-muted-foreground text-pretty mb-6">
            Conheça nossos peludinhos que estão a procura de um lar cheio de amor. Cada adoção transforma duas vidas.
          </p>

          <div className="flex flex-row md:grid md:grid-cols-4 overflow-x-auto gap-4 p-6">
            {pets.map((pet) => {      
              return(
                <PetCard key={pet.id} pet={pet} />
              )
            })}
          </div>
            
          <Button variant="secondary" className="px-4 py-5 rounded-xl mt-5" render={<Link href="/projects" />}>
            <span className="text-base font-semibold">Ver todos os animais</span>
            <ArrowRight className="w-4 h-4 mt-0.5" />
          </Button>
        </div>
    </Section>
  );
}