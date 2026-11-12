"use client";

import { playfair } from "@/lib/fonts";
import CommentCarousel from "@/components/comment-carousel";
import { Section } from "@/components/ui/section";

const comments = [
  {
    id: 1,
    text: "Adotar o Thor foi a melhor decisão da minha vida. A Hopepet me deu todo o suporte necessário e até hoje me ajudam com dúvidas. Recomendo demais!",
    name: "Maria Silva",
    role: "Adotante",
    image: "/comentario-maria.png"
  },
  {
    id: 2,
    text: "Sou voluntária há 2 anos e posso dizer que é uma das experiências mais gratificantes. Ver os animais encontrando lares amorosos não tem preço.",
    name: "Ana Santos",
    role: "Voluntária",
    image: "/comentario-ana.png"
  },
  {
    id: 3,
    text: "A transparência e organização da Hopepet me fez confiar em fazer doações mensais. Sei que meu dinheiro está sendo bem utilizado para salvar vidas.",
    name: "Carlos Oliveira",
    role: "Doador",
    image: "/comentario-carlos.png"
  }
];

export default function Comments() {
  return (
    <Section id="comments" className="bg-primary/5">
      <div className="flex flex-col items-center justify-center">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          Depoimentos
        </span>

        <h2 className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mt-2 mb-6`}>
          O que dizem sobre nós
        </h2>

        <div className="max-w-4xl mx-auto">
          <CommentCarousel comments={comments} />
        </div>
      </div>
    </Section>
  );
}
