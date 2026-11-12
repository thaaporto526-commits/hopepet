import Link from "next/link";
import { CreditCard, RefreshCw, HandHeart, Heart, Users } from "lucide-react";
import { playfair } from "@/lib/fonts";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const donationOptions = [
  {
    id: 1,
    title: "Doação Única",
    icon: CreditCard,
    description: "Contribua pontualmente com qualquer valor para apoiar nossos resgates diários e tratamentos veterinários.",
    buttonText: "Doar agora",
    link: "/donate",
  },
  {
    id: 2,
    title: "Doação Mensal",
    icon: RefreshCw,
    description: "Torne-se um padrinho mensal e garanta alimentação contínua e abrigo seguro para dezenas de animais.",
    buttonText: "Ser padrinho",
    link: "/donate",
  },
  {
    id: 3,
    title: "Doe Seu Tempo",
    icon: HandHeart,
    description: "Ajude em nossos eventos, mutirões de castração, campanhas de adoção ou nos cuidados em lares temporários.",
    buttonText: "Cadastrar como voluntário",
    link: "/contact",
  },
];

export default function SupportSection() {
  return (
    <Section id="support" className="bg-primary text-primary-foreground">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider bg-primary-foreground/10 px-3 py-1 rounded-full mb-3">
          Faça a diferença
        </span>

        <h2 className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4`}>
          Seja um Apoiador!
        </h2>

        <p className="text-base sm:text-lg text-primary-foreground/90 text-pretty mb-8">
          Com a sua ajuda, podemos continuar resgatando, cuidando e transformando a vida de animais que foram abandonados. Cada contribuição salva uma vida.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="secondary"
            className="px-6 py-6 text-base font-semibold shadow-md"
            render={<Link href="/donate" />}
          >
            <Heart className="w-5 h-5" />
            <span>Fazer uma Doação</span>
          </Button>

          <Button
            variant="basic"
            className="px-6 py-6 text-base font-semibold shadow-md"
            render={<Link href="/contact" />}
          >
            <Users className="w-5 h-5 text-primary" />
            <span>Quero Ser Voluntário</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {donationOptions.map((option) => (
          <Card
            key={option.id}
            className="h-full flex flex-col bg-background text-card-foreground border-none shadow-md hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <CardHeader className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <option.icon className="w-7 h-7" />
              </div>

              <h3 className={`${playfair.className} text-xl font-bold text-card-foreground`}>
                {option.title}
              </h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                {option.description}
              </p>
            </CardContent>

            <CardFooter className="mt-auto pt-4">
              <Button
                variant="secondary"
                className="w-full font-semibold"
                render={<Link href={option.link} />}
              >
                {option.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
