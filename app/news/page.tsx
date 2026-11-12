import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { playfair } from "@/lib/fonts";

const newsList = [
  {
    title: "Campanha de Castração Abril 2026",
    category: "Campanhas",
    date: "10 de abril de 2026",
    description:
      "Nova campanha de castração gratuita acontecerá em parceria com clínicas veterinárias da região.",
    image: "/news-castracao.png",
    link: "/news/campanha-castracao",
  },
  {
    title: "Feira de Adoção no Shopping Center Norte",
    category: "Eventos",
    date: "5 de abril de 2026",
    description:
      "Mais de 50 animais estarão disponíveis para adoção. Venha conhecer seu novo melhor amigo!",
    image: "/news-adocao.png",
    link: "/news/feira-adocao",
  },
  {
    title: "Parceria com Pet Shop Amigo Animal",
    category: "Parcerias",
    date: "1 de abril de 2026",
    description:
      "Nova parceria garantirá descontos em medicamentos e ração para animais resgatados pela ONG.",
    image: "/news-parceria.png",
    link: "/news/parceria-pet-shop",
  },
];

export default function NewsPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Fique por dentro
        </span>

        <h1
          className={`${playfair.className} text-3xl md:text-5xl font-bold mt-3 mb-4`}
        >
          Notícias e novidades
        </h1>

        <p className="text-muted-foreground text-lg">
          Acompanhe nossas campanhas, eventos e parcerias em defesa dos animais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsList.map((item) => (
          <article
            key={item.link}
            className="bg-card border rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-video">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                {item.category}
              </span>

              <p className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                {item.date}
              </p>

              <h2 className={`${playfair.className} text-xl font-bold mb-3`}>
                {item.title}
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>

              <Link
                href={item.link}
                className="mt-auto inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
              >
                Ler notícia completa
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
