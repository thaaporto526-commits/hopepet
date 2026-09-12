import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";


export interface News {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

type NewsCardProps = {
  news: News
}

export default function NewsCard({ news }: NewsCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);

    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    })
  }

  return (
    <article className="h-full">
      <Card className="h-full w-[85vw] md:w-full min-w-70 shrink-0 snap-center pt-0 hover:-translate-y-0.5 hover:shadow-lg transition-all">
        <div className="relative aspect-16/10">
          <Image 
            src={news.image}
            alt="Imagem de capa da notícia"
            fill
            className="object-cover"
          />

          <Badge className="absolute left-4 top-4">
            {news.category}
          </Badge>
        </div>

        <CardHeader>
          <span className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4 pb-0.5" />
            {formatDate(news.date)}
          </span>
          
          <h3 className="text-xl font-semibold text-card-foreground group-hover/card:text-primary transition-colors">
            {news.title}
          </h3>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground text-sm line-clamp-3 text-pretty">
            {news.description}
          </p>
        </CardContent>

        <CardFooter className="mt-auto">
          <Link href={news.link} className="flex items-center gap-1 text-primary text-sm hover:underline underline-offset-2">
            Ler mais
            <ArrowRight className="w-4 h-4" />
          </Link>
        </CardFooter>
      </Card>
    </article>
  )
}