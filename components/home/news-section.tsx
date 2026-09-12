import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { playfair } from "@/lib/fonts"
import { ArrowRight } from "lucide-react"
import NewsCard from "@/components/news-card"

const news = [
  {
    id: 1,
    category: "Campanhas",
    date: "2026-04-10" ,
    title: "Campanha de Castração Abril 2026",
    description: "Nova campanha de castração gratuita acontecerá no próximo mês em parceria com clínicas veterinárias da região.",
    image: "/hero-dog.png",
    link: "#"
  },
  {
    id: 2,
    category: "Eventos",
    date: "2026-04-05",
    title: "Feira de Adoção no Shopping Center Norte",
    description: "Mais de 50 animais estarão disponíveis para adoção. Venha conhecer seu novo melhor amigo!",
    image: "/hero-dog.png",
    link: "#"
  },
  {
    id: 3,
    category: "Parcerias",
    date: "2026-04-01",
    title: "Parceria com Pet Shop Amigo Animal",
    description: "Nova parceria garantirá descontos em medicamentos e ração para animais resgatados pela ONG.",
    image: "/hero-dog.png",
    link: "#"
  }
];


export default function News() {
  return(
    <Section id="news" className="bg-background">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Fique por dentro
          </span>
          
          <h2 className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mt-2`}>
            Ultimas Notícias
          </h2> 
        </div>

        <Button variant="outline" aria-label="Ir para a aba de notícias" render={<Link href="/news" />} className="text-muted-foreground text-sm font-medium">
          <span>Ver todos as notícias</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto gap-4 p-6">
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </Section>
  )
}