import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { playfair } from "@/lib/fonts";
import { ArrowRight } from "lucide-react";
import NewsCard, { type News as NewsItem } from "@/components/news-card";

const newsList: NewsItem[] = [
  {
    id: 1,
    category: "Campanhas",
    date: "2026-04-10",
    title: "Campanha de Castração Abril 2026",
    description:
      "Nova campanha de castração gratuita acontecerá no próximo mês em parceria com clínicas veterinárias da região.",
    image: "/news-castracao.png",
    link: "/news/campanha-castracao",
  },
  {
    id: 2,
    category: "Eventos",
    date: "2026-04-05",
    title: "Feira de Adoção no Shopping Center Norte",
    description:
      "Mais de 50 animais estarão disponíveis para adoção. Venha conhecer seu novo melhor amigo!",
    image: "/news-adocao.png",
    link: "/news/feira-adocao",
  },
  {
    id: 3,
    category: "Parcerias",
    date: "2026-04-01",
    title: "Parceria com Pet Shop Amigo Animal",
    description:
      "Nova parceria garantirá descontos em medicamentos e ração para animais resgatados pela ONG.",
    image: "/news-parceria.png",
    link: "/news/parceria-pet-shop",
  },
  {
    id: 4,
    category: "Voluntariado",
    date: "2026-11-01",
    title: "Maria: voluntária do mês",
    description:
      "Conheça a história de Maria e sua dedicação ao cuidado dos animais e às atividades da Hopepet.",
    image: "/news-maria.png",
    link: "/news/voluntaria-do-mes",
  },
  {
    id: 5,
    category: "Cuidados",
    date: "2026-06-15",
    title: "Dicas de cuidado com os pets no inverno",
    description:
      "Confira cuidados importantes para manter cães e gatos aquecidos, confortáveis e protegidos durante os dias frios.",
    image: "/news-inverno.png",
    link: "/news/cuidados-inverno",
  },
  {
    id: 6,
    category: "Resgates",
    date: "2026-08-20",
    title: "Resgate emocionante: seis filhotes encontrados",
    description:
      "Uma equipe de voluntários encontrou seis filhotes que precisavam de acolhimento e cuidados.",
    image: "/news-resgate.png",
    link: "/news/resgate-seis-filhotes",
  },
  {
    id: 7,
    category: "Retrospectiva",
    date: "2025-12-30",
    title: "Balanço 2025: um ano de conquistas",
    description:
      "Relembre momentos importantes, ações realizadas e histórias que marcaram o ano da Hopepet.",
    image: "/news-balanco.png",
    link: "/news/balanco-2025",
  },
];

export default function NewsSection() {
  return (
    <Section id="news" className="bg-background">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Fique por dentro
          </span>

          <h2
            className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mt-2`}
          >
            Últimas Notícias
          </h2>
        </div>

        <Button
          variant="outline"
          aria-label="Ir para a aba de notícias"
          render={<Link href="/news" />}
          className="text-muted-foreground text-sm font-medium self-start sm:self-auto"
        >
          <span>Ver todas as notícias</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div className="w-full overflow-x-auto pb-4 pt-2 flex flex-row md:grid md:grid-cols-3 gap-6 scrollbar-none snap-x">
        {newsList.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </Section>
  );
}
