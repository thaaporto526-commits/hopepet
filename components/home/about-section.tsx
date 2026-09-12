import Image from "next/image";
import team from "@/public/about-team.png";
import { Users, Award, Clock, Target, Eye, Heart } from "lucide-react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { playfair } from "@/lib/fonts";
import { Section } from "@/components/ui/section";

export default function About() {
  const cards = [
    { title: "Nossa Missão", icon: Target, iconColor: "text-primary bg-primary/10", border: "hover:border-primary/30", desc: "Resgatar, reabilitar e realocar animais em situacao de vulnerabilidade, promovendo a adocao responsavel e conscientizando a populacao sobre a importancia do cuidado animal." },
    { title: "Nossa Visão", icon: Eye, iconColor: "text-secondary bg-secondary/10", border: "hover:border-secondary/30", desc: "Ser referencia em protecao animal no Brasil, construindo uma sociedade onde todos os animais tenham acesso a cuidados dignos e lares amorosos." },
    { title: "Nossos Valores", icon: Heart, iconColor: "text-primary bg-primary/10", border: "hover:border-primary/30", desc: "Compaixao, transparencia, respeito a vida, trabalho em equipe e compromisso com a excelencia em tudo que fazemos." }
  ];

  return (
    <Section id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="order-2 md:order-1">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Quem somos</span>

            <h2 className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mt-2 mb-3`}>A Hopepet é um grupo de voluntários dedicados aos animais</h2>
            
            <p className="text-muted-foreground text-lg text-pretty mb-6">
              Somos uma organização sem fins lucrativos formada por voluntários com o objetivo de resgatar, reabilitar e encontrar lares amorosos para animais em situação de vulnerabilidade.
            </p>

            <p className="text-muted-foreground text-lg text-pretty mb-8">
              Desde nossa fundação, ja salvamos centenas de vidas e conectamos animais com famílias que os amam incondicionalmente. Trabalhamos com transparência, dedicacção e muito amor por cada ser que passa por nossos cuidados.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Users className="text-primary w-6 h-6" />
                </div>

                <p className="text-foreground text-xl font-bold">
                  50+
                </p>

                <p className="text-muted-foreground text-xs">
                  Voluntários
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Award className="text-primary w-6 h-6" />
                </div>

                <p className="text-foreground text-xl font-bold">
                  500+
                </p>

                <p className="text-muted-foreground text-xs">
                  Resgates
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Clock className="text-primary w-6 h-6" />
                </div>

                <p className="text-foreground text-xl font-bold">
                  5
                </p>

                <p className="text-muted-foreground text-xs">
                  Anos
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden h-full w-full min-h-100">
              <Image 
                src={team}
                alt="Time"
                fill
                className="object-cover" 
              />
            </div>

            <div className="hidden md:block absolute -right-6 -bottom-6 rounded-xl bg-card border border-border shadow-lg p-6">
              <p className="text-muted-foreground text-sm">
                Desde
              </p>

              <p className="text-primary text-3xl font-bold">
                2021
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            return(
              <Card key={index} className={`text-center hover:shadow-lg border ${card.border} hover:-translate-y-0.5 transition-all`}>
                <CardHeader>
                  <div className={`${card.iconColor} w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center`}>
                    <card.icon className="w-8 h-8"/>
                  </div>

                  <h3 className={`${playfair.className} text-card-foreground text-xl font-bold`}>{card.title}</h3>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm text-pretty">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
    </Section>
  )
}