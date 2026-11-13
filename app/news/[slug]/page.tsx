import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { Section } from "@/components/ui/section";
import { playfair } from "@/lib/fonts";

const news = {
  "campanha-castracao": {
    category: "Campanhas",
    date: "10 de abril de 2026",
    title: "Campanha de Castração Abril 2026",
    image: "/news-castracao.png",
    paragraphs: [
      "A Hopepet está promovendo uma campanha especial de castração gratuita, com o objetivo de contribuir para o bem-estar animal e incentivar a guarda responsável.",
      "A iniciativa acontece em parceria com clínicas veterinárias da região e busca oferecer mais acesso aos cuidados essenciais para cães e gatos.",
      "A castração é uma importante medida de saúde pública e proteção animal, ajudando a prevenir doenças e evitar a reprodução sem planejamento.",
      "Acompanhe nossas redes sociais para conhecer as orientações e informações sobre as próximas etapas da campanha.",
    ],
  },

  "feira-adocao": {
    category: "Eventos",
    date: "5 de abril de 2026",
    title: "Feira de Adoção no Shopping Center Norte",
    image: "/news-adocao.png",
    paragraphs: [
      "A Hopepet está preparando uma feira especial de adoção no Shopping Center Norte. O evento tem como objetivo aproximar animais resgatados de famílias dispostas a oferecer um lar cheio de carinho.",
      "Mais de 50 animais estarão disponíveis para adoção, incluindo cães e gatos de diferentes idades e tamanhos.",
      "Durante o evento, nossa equipe estará presente para conversar com os visitantes, apresentar os animais e explicar como funciona o processo de adoção responsável.",
      "Adotar é um gesto de amor que transforma vidas. Venha conhecer nossos animais e quem sabe encontrar um novo melhor amigo!",
    ],
  },

  "parceria-pet-shop": {
    category: "Parcerias",
    date: "1 de abril de 2026",
    title: "Parceria com Pet Shop Amigo Animal",
    image: "/news-parceria.png",
    paragraphs: [
      "A Hopepet anuncia uma nova parceria com o Pet Shop Amigo Animal, fortalecendo nossa rede de apoio à proteção e ao cuidado dos animais resgatados.",
      "Por meio dessa parceria, a iniciativa prevê condições especiais na aquisição de medicamentos e rações destinados aos animais acolhidos pela organização.",
      "A união entre empresas e instituições de proteção animal é fundamental para ampliar o alcance das ações e oferecer melhores condições aos animais que precisam de ajuda.",
      "Agradecemos ao Pet Shop Amigo Animal por apoiar essa causa e contribuir para um futuro com mais cuidado e respeito aos animais.",
    ],
  },

  "voluntaria-do-mes": {
    category: "Voluntariado",
    date: "1 de novembro de 2026",
    title: "Maria: voluntária do mês",
    image: "/maria.png",
    paragraphs: [
      "Neste mês, a Hopepet dedica um agradecimento especial à Maria, voluntária que representa o carinho, a dedicação e o compromisso com a proteção animal.",
      "Sua participação nas atividades da organização demonstra como pequenas atitudes podem fazer uma grande diferença na vida dos animais acolhidos.",
      "Entre os cuidados com os animais, a organização dos espaços e o apoio às ações da ONG, Maria contribui para que o trabalho continue acontecendo com responsabilidade e carinho.",
      "A Hopepet agradece a todos os voluntários que dedicam seu tempo e sua disposição à causa animal. Cada pessoa que participa ajuda a construir uma realidade melhor para cães e gatos.",
    ],
  },

  "cuidados-inverno": {
    category: "Cuidados",
    date: "15 de junho de 2026",
    title: "Dicas de cuidado com os pets no inverno",
    image: "/inverno.png",
    paragraphs: [
      "Com a chegada dos dias frios, cães e gatos precisam de alguns cuidados especiais para continuar confortáveis e protegidos. As baixas temperaturas podem afetar principalmente filhotes, animais idosos e aqueles com pelagem curta.",
      "Uma das principais recomendações é oferecer um local protegido do vento, da chuva e da umidade. Caminhas, cobertores limpos e espaços secos ajudam os animais a se manterem aquecidos.",
      "Durante os passeios, vale observar a temperatura e evitar horários muito frios. Também é importante manter a rotina de alimentação, hidratação e higiene.",
      "Cada animal possui necessidades diferentes. Caso perceba alterações de comportamento ou sinais de desconforto, procure orientação de um médico-veterinário.",
      "Cuidar dos pets também significa estar atento às mudanças de temperatura e adaptar a rotina para garantir seu bem-estar durante todo o ano.",
    ],
  },

  "resgate-seis-filhotes": {
    category: "Resgates",
    date: "20 de agosto de 2026",
    title: "Resgate emocionante: seis filhotes encontrados",
    image: "/resgate.png",
    paragraphs: [
      "Uma equipe de voluntários da Hopepet participou de um resgate especial: seis filhotes foram encontrados em situação de vulnerabilidade e precisavam de acolhimento.",
      "Após o resgate, os pequenos foram encaminhados para um ambiente protegido, onde passaram a receber atenção, alimentação e os cuidados necessários.",
      "A equipe também iniciou o acompanhamento dos filhotes, com atenção à saúde, à higiene e ao desenvolvimento de cada um deles.",
      "Histórias como essa mostram a importância do trabalho conjunto entre voluntários e pessoas que se preocupam com a proteção animal.",
      "A Hopepet acredita que todo animal merece uma oportunidade de viver com segurança, respeito e carinho. O acolhimento é apenas o primeiro passo para uma nova história.",
    ],
  },

  "balanco-2025": {
    category: "Retrospectiva",
    date: "30 de dezembro de 2025",
    title: "Balanço 2025: um ano de conquistas",
    image: "/balanco.png",
    paragraphs: [
      "O ano de 2025 foi marcado por dedicação, aprendizado e importantes momentos para a Hopepet. Ao longo do período, a organização continuou trabalhando pela proteção animal e pela conscientização sobre a adoção responsável.",
      "As campanhas, ações de acolhimento e iniciativas de incentivo à adoção fizeram parte da rotina da ONG, sempre com o objetivo de oferecer melhores oportunidades aos animais.",
      "Outro ponto importante foi o apoio de voluntários e parceiros, que contribuíram para fortalecer as atividades e ampliar a rede de pessoas comprometidas com a causa.",
      "Cada animal acolhido, cada família orientada e cada pessoa que se aproximou do projeto representa um motivo para continuar.",
      "A Hopepet encerra 2025 com gratidão a todos que fizeram parte dessa caminhada e com o compromisso de seguir trabalhando por um futuro com mais respeito e cuidado aos animais.",
    ],
  },
};

type NewsSlug = keyof typeof news;

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in news)) {
    notFound();
  }

  const article = news[slug as NewsSlug];

  return (
    <Section>
      <article className="max-w-4xl mx-auto">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para notícias
        </Link>

        <div className="mb-6">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {article.category}
          </span>

          <h1
            className={`${playfair.className} text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5`}
          >
            {article.title}
          </h1>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            {article.date}
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {article.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-card border text-center">
          <h2 className={`${playfair.className} text-2xl font-bold mb-3`}>
            Faça parte dessa causa!
          </h2>

          <p className="text-muted-foreground mb-6">
            Existem muitas maneiras de ajudar a transformar a vida dos animais.
            Conheça nossas iniciativas e participe!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/volunteer"
              className="bg-primary text-primary-foreground rounded-xl px-6 py-3 font-semibold hover:opacity-90 transition"
            >
              Seja voluntário
            </Link>

            <Link
              href="/donate"
              className="border rounded-xl px-6 py-3 font-semibold hover:bg-muted transition"
            >
              Faça uma doação
            </Link>
          </div>
        </div>
      </article>
    </Section>
  );
}
