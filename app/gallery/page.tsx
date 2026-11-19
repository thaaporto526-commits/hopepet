import Image from "next/image";
import { Section } from "@/components/ui/section";
import { playfair } from "@/lib/fonts";

const dogs = Array.from({ length: 12 }, (_, index) => ({
  src: `/cachorro${index + 1}.png`,
  alt: `Cachorro ${index + 1}`,
}));

const cats = [
  { src: "/gato2.png", alt: "Gato 2" },
  { src: "/gato3.png", alt: "Gato 3" },
  { src: "/gato4.png", alt: "Gato 4" },
  { src: "/gato5.png", alt: "Gato 5" },
  { src: "/gato6.png", alt: "Gato 6" },
  { src: "/gatos1.png", alt: "Gato 1" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Um carinho em cada olhar
          </p>

          <h1 className={`${playfair.className} text-4xl font-bold md:text-5xl`}>
            Nossos Amigos
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Cada focinho, cada olhar e cada personalidade fazem parte da
            família Hopepet. Conheça alguns dos nossos queridos amigos!
          </p>
        </div>

        <div className="mt-16">
          <h2 className={`${playfair.className} mb-8 text-3xl font-bold`}>
            Nossos Cachorros
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {dogs.map((dog) => (
              <div
                key={dog.src}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-sm"
              >
                <Image
                  src={dog.src}
                  alt={dog.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className={`${playfair.className} mb-8 text-3xl font-bold`}>
            Nossos Gatos
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {cats.map((cat) => (
              <div
                key={cat.src}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-sm"
              >
                <Image
                  src={cat.src}
                  alt={cat.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
