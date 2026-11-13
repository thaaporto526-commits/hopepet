import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, Heart, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { playfair } from "@/lib/fonts";

const pets = {
  apolo: {
    name: "Apolo",
    image: "/apolo.png",
    specie: "Cachorro",
    race: "Spitz Alemão",
    gender: "Macho",
    age: "6 meses",
    city: "São Paulo",
    state: "SP",
    status: "Disponível",
    personality: "Alegre, curioso e muito brincalhão.",
    history: "Apolo é um filhotinho cheio de energia que está procurando uma família para acompanhar suas descobertas e oferecer muito carinho.",
  },
  bento: {
    name: "Bento",
    image: "/bento.png",
    specie: "Cachorro",
    race: "Vira-Lata",
    gender: "Macho",
    age: "5 anos",
    city: "São Paulo",
    state: "SP",
    status: "Disponível",
    personality: "Companheiro, tranquilo e carinhoso.",
    history: "Bento é um cão adulto que merece uma oportunidade de encontrar um lar acolhedor. É um ótimo companheiro para compartilhar momentos especiais.",
  },
  lola: {
    name: "Lola",
    image: "/lola.png",
    specie: "Cachorro",
    race: "Vira-Lata",
    gender: "Fêmea",
    age: "2 anos",
    city: "São Paulo",
    state: "SP",
    status: "Disponível",
    personality: "Doce, esperta e brincalhona.",
    history: "Lola é uma cachorrinha que procura uma família disposta a oferecer amor, cuidado e muitas brincadeiras.",
  },
  muth: {
    name: "Muth",
    image: "/Muth.png",
    specie: "Cachorro",
    race: "Spitz Alemão",
    gender: "Macho",
    age: "3 anos",
    city: "São Paulo",
    state: "SP",
    status: "Disponível",
    personality: "Esperto, companheiro e cheio de personalidade.",
    history: "Muth está à procura de uma família que queira compartilhar a rotina com um companheiro especial.",
  },
  simba: {
    name: "Simba",
    image: "/simba.png",
    specie: "Cachorro",
    race: "Labrador",
    gender: "Macho",
    age: "4 anos",
    city: "São Paulo",
    state: "SP",
    status: "Disponível",
    personality: "Amigável, carinhoso e companheiro.",
    history: "Simba é um Labrador que procura um lar onde possa receber atenção, cuidado e fazer parte da família.",
  },
  thor: {
    name: "Thor",
    image: "/thor.png",
    specie: "Cachorro",
    race: "Spitz Alemão",
    gender: "Macho",
    age: "1 ano",
    city: "São Paulo",
    state: "SP",
    status: "Adotado",
    personality: "Carinhoso, alegre e cheio de energia.",
    history: "Thor já encontrou sua família! Maria se apaixonou por ele e agora os dois começam uma linda história juntos.",
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
    history: "Bob é um cachorro muito especial, que merece uma família para chamar de sua. Ele procura pessoas que possam oferecer cuidado e amor.",
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
    history: "Luna é uma gatinha encantadora que procura um lar seguro e acolhedor. Sua personalidade tranquila faz dela uma ótima companheira.",
  },
  mel: {
    name: "Mel",
    image: "/mel.png",
    specie: "Gato",
    race: "Siamês",
    gender: "Fêmea",
    age: "4 anos",
    city: "São Paulo",
    state: "SP",
    status: "Em análise",
    personality: "Curiosa, delicada e brincalhona.",
    history: "Mel é uma gatinha cheia de curiosidade e encanto. Atualmente, seu processo de adoção está em análise.",
  },
  frajola: {
    name: "Frajola",
    image: "/frajola.png",
    specie: "Gato",
    race: "SRD",
    gender: "Macho",
    age: "3 meses",
    city: "São Paulo",
    state: "SP",
    status: "Disponível",
    personality: "Brincalhão, curioso e carinhoso.",
    history: "Frajola é um gatinho filhote que está descobrindo o mundo e procura uma família para crescer cercado de carinho.",
  },
  florejade: {
    name: "Flor e Jade",
    image: "/florejade.png",
    specie: "Gatas",
    race: "SRD",
    gender: "Fêmeas",
    age: "5 meses",
    city: "São Paulo",
    state: "SP",
    status: "Adoção conjunta",
    personality: "Duas irmãs carinhosas, curiosas e brincalhonas.",
    history: "Flor e Jade são irmãs e cresceram juntas. Compartilham brincadeiras, momentos de descanso e muito carinho. Nossa preferência é encontrar uma família que possa acolher as duas, preservando esse vínculo especial.",
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
  const isAvailable = animal.status === "Disponível";
  const isJointAdoption = animal.status === "Adoção conjunta";
  const animalName = encodeURIComponent(animal.name);

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

            <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mt-3 mb-4`}>
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

            {isAvailable || isJointAdoption ? (
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href={`/contact?animal=${animalName}&tipo=adocao`}
                  className="w-full inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground rounded-xl px-6 py-4 font-semibold hover:opacity-90 transition"
                >
                  <Heart className="w-5 h-5" />
                  {isJointAdoption ? "Quero adotar as duas!" : "Tenho interesse em adotar"}
                </Link>

                <Link
                  href={`/contact?animal=${animalName}&tipo=mensagem`}
                  className="w-full inline-flex justify-center items-center gap-2 border border-primary text-primary rounded-xl px-6 py-4 font-semibold hover:bg-primary/5 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar uma mensagem
                </Link>
              </div>
            ) : (
              <p className="mt-8 text-sm text-muted-foreground">
                {animal.status === "Adotado"
                  ? "Este animal já encontrou uma família! Ficamos felizes com essa nova história."
                  : "Este animal está com o processo de adoção em análise no momento."}
              </p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
