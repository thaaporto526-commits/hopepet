"use client";

import { useState } from "react";
import PetCard, { type Pet } from "@/components/pet-card";
import { Section } from "@/components/ui/section";
import { playfair } from "@/lib/fonts";
import { Search, Heart, MessageCircle, PawPrint } from "lucide-react";

const pets: Pet[] = [
  {
    id: 1,
    name: "Apolo",
    image: "/apolo.png",
    specie: "Cachorro",
    race: "Spitz Alemão",
    gender: "Macho",
    age: "6 meses",
    city: "",
    state: "",
    status: "available",
  },
  {
    id: 2,
    name: "Bento",
    image: "/bento.png",
    specie: "Cachorro",
    race: "Vira-Lata",
    gender: "Macho",
    age: "5 anos",
    city: "",
    state: "",
    status: "available",
  },
  {
    id: 3,
    name: "Lola",
    image: "/lola.png",
    specie: "Cachorro",
    race: "Vira-Lata",
    gender: "Fêmea",
    age: "2 anos",
    city: "",
    state: "",
    status: "available",
  },
  {
    id: 4,
    name: "Muth",
    image: "/Muth.png",
    specie: "Cachorro",
    race: "Spitz Alemão",
    gender: "Macho",
    age: "3 anos",
    city: "",
    state: "",
    status: "available",
  },
  {
    id: 5,
    name: "Simba",
    image: "/simba.png",
    specie: "Cachorro",
    race: "Labrador",
    gender: "Macho",
    age: "4 anos",
    city: "",
    state: "",
    status: "available",
  },
  {
    id: 6,
    name: "Thor",
    image: "/thor.png",
    specie: "Cachorro",
    race: "Spitz Alemão",
    gender: "Macho",
    age: "1 ano",
    city: "São Paulo",
    state: "SP",
    status: "adopted",
  },
  {
    id: 7,
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
    id: 8,
    name: "Luna",
    image: "/luna.png",
    specie: "Gato",
    race: "SRD",
    gender: "Fêmea",
    age: "2 anos",
    city: "São Paulo",
    state: "SP",
    status: "available",
  },
  {
    id: 9,
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
  {
    id: 10,
    name: "Frajola",
    image: "/frajola.png",
    specie: "Gato",
    race: "SRD",
    gender: "Macho",
    age: "3 meses",
    city: "",
    state: "",
    status: "available",
  },
  {
    id: 11,
    name: "Flor e Jade",
    image: "/florejade.png",
    specie: "Gato",
    race: "SRD",
    gender: "Fêmeas",
    age: "5 meses",
    city: "",
    state: "",
    status: "available",
  },
];

export default function AdoptionPage() {
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");

  const filteredPets = pets.filter((pet) => {
    const matchesFilter =
      filter === "Todos" ||
      (filter === "Cachorros" && pet.specie === "Cachorro") ||
      (filter === "Gatos" && pet.specie === "Gato");

    const matchesSearch = pet.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <main>
      <Section id="adoption">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Adote um amigo
          </span>

          <h1
            className={`${playfair.className} text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4`}
          >
            Encontre seu novo melhor amigo
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg">
            Conheça nossos animais e descubra quem está esperando por uma
            família cheia de carinho.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar animal pelo nome..."
              className="w-full rounded-xl border bg-background py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {["Todos", "Cachorros", "Gatos"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  filter === option
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/70"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`${playfair.className} text-2xl font-bold`}>
              Nossos animais
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredPets.length} resultados
            </span>
          </div>

          {filteredPets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              Nenhum animal encontrado. Tente outra busca.
            </div>
          )}
        </div>

        <div className="max-w-5xl mx-auto mt-20">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Nosso processo
            </span>
            <h2
              className={`${playfair.className} text-3xl font-bold mt-2`}
            >
              Como funciona a adoção?
            </h2>
            <p className="text-muted-foreground mt-3">
              Queremos que cada animal encontre uma família preparada para
              oferecer cuidado, segurança e carinho.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border bg-card p-6 text-center">
              <PawPrint className="w-9 h-9 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">1. Escolha</h3>
              <p className="text-sm text-muted-foreground">
                Conheça os animais e escolha aquele com quem deseja criar um
                vínculo.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 text-center">
              <Heart className="w-9 h-9 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">2. Demonstre interesse</h3>
              <p className="text-sm text-muted-foreground">
                Entre em contato e conte um pouco sobre você e o lar que
                oferecerá ao animal.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 text-center">
              <MessageCircle className="w-9 h-9 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">3. Converse com a equipe</h3>
              <p className="text-sm text-muted-foreground">
                Tire dúvidas e receba orientações sobre os cuidados e a
                adaptação.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 text-center">
              <Heart className="w-9 h-9 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">4. Nova família</h3>
              <p className="text-sm text-muted-foreground">
                Após a avaliação, começa uma nova história de amor e
                responsabilidade.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
