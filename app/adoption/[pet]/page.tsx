import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, Heart } from "lucide-react";
import { Section } from "@/components/ui/section";
import { playfair } from "@/lib/fonts";

const pets = {
  thor: {
    name: "Thor",
    image: "/thor.png",
    specie: "Cachorro",
    race: "Spitz Alemão",
    gender: "Macho",
    age: "1 ano",
    city: "São Paulo",
    state: "SP",
    status: "Disponível",
    personality: "Carinhoso, alegre e cheio de energia.",
    history:
      "Thor é um cãozinho que está em busca de uma família que ofereça carinho, atenção e um lar cheio de amor. Ele adora brincar e estar perto das pessoas.",
  },
  luna: {
    name: "Luna",
    image: "/luna.png",
    specie: "Gato",
    race: "SRD",
    gender: "Fêmea",
    age: "2 anos",
    city: "São Paulo",
    state: "SP",
    status: "Disponível",
    personality: "Tranquila, dócil e muito companheira.",
    history:
      "Luna é uma gatinha encantadora que procura um lar seguro e acolhedor. Sua personalidade tranquila faz dela uma ótima companheira para quem deseja compartilhar momentos de carinho.",
  },
  bob: {
    name: "Bob",
    image: "/bob.png",
    specie: "Cachorro",
    race: "Vira-Lata",
    gender: "Macho",
    age: "3 anos",
    city: "Guarulhos",
    state: "SP",
    status: "Disponível",
    personality: "Amigável, brincalhão e companheiro.",
    history:
      "Bob é um cachorro muito especial, que merece uma família para chamar de sua. Ele está pronto para começar uma nova história ao lado de pessoas que possam oferecer cuidado e amor.",
  },
  mel: {
    name: "Mel",
    image: "/mel.png",
    specie: "Gato",
    race: "Siamês",
    gender: "Fêmea",
    age: "6 meses",
    city: "São Paulo",
    state: "SP",
    status: "Em análise",
    personality: "Curiosa, delicada e brincalhona.",
    history:
      "Mel é uma gatinha jovem, cheia de curiosidade e encanto. Atualmente, seu processo de adoção está em análise, mas você pode conhecer um pouco mais sobre ela nesta página.",
  },
};

type PetSlug = keyof typeof pets;

export default async function PetDetailPage({
  params,
}: {
  params: Promise<{ pet: string }>;
}) {
  const { pet: slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(pets, slug)) {
    notFound();
  }

  const animal = pets[slug as PetSlug];

  return (
    <Section>
      <div className="max-w-5xl mx-auto">
        <Link
          href="/adoption"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para os animais
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src={animal.image}
              alt={`Foto de ${animal.name}`}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Conheça nosso amigo
            </span>

            <h1
              className={`${playfair.className} text-4xl md:text-5xl font-bold mt-3 mb-4`}
            >
              {animal.name}
            </h1>

            <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold mb-6">
              {animal.status}
            </span>

            <p className="text-muted-foreground text-lg leading-relaxed mb-7">
              {animal.history}
            </p>

            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <span>{animal.specie} - {animal.race}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{animal.age} - {animal.gender}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{animal.city}, {animal.state}</span>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-card border">
              <h2 className={`${playfair.className} text-2xl font-bold mb-2`}>
                Personalidade
              </h2>

              <p className="text-muted-foreground">
                {animal.personality}
              </p>
            </div>

            {animal.status === "Disponível" ? (
              <Link
                href={`/contact?animal=${animal.name}`}
                className="mt-8 w-full inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground rounded-xl px-6 py-4 font-semibold hover:opacity-90 transition"
              >
                <Heart className="w-5 h-5" />
                Tenho interesse em adotar
              </Link>
            ) : (
              <p className="mt-8 text-sm text-muted-foreground">
                Este animal está com o processo de adoção em análise.
              </p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
