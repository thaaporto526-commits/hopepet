"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BriefcaseBusiness,
  Laptop,
  Users,
  Truck,
  Megaphone,
  ChevronDown,
} from "lucide-react";
import { playfair } from "@/lib/fonts";
import { Section } from "@/components/ui/section";

const sectors = [
  {
    name: "Administrativo",
    description:
      "Nosso setor é responsável por organizar e administrar a parte burocrática e a comunicação da ONG. Garantimos que tudo funcione de forma correta e transparente, cuidando de documentos, controle de gastos, atendimento ao público e apoio na captação de recursos.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Tecnologia da Informação",
    description:
      "O setor de TI é responsável pela infraestrutura tecnológica, sistemas de gestão e presença digital da ONG. Desenvolve e gerencia as plataformas para adoção online, gestão de voluntários e comunicação com doadores.",
    icon: Laptop,
  },
  {
    name: "Recursos Humanos",
    description:
      "O RH é responsável por cuidar das pessoas e do ambiente de trabalho, atuando na contratação, treinamento, avaliação, gestão de benefícios e alinhamento dos objetivos da equipe com os da organização.",
    icon: Users,
  },
  {
    name: "Logística",
    description:
      "O setor logístico da Hopepet é responsável por planejar, organizar e controlar todas as atividades relacionadas ao recebimento, armazenamento, distribuição e transporte de recursos destinados ao cuidado dos animais. Atua garantindo que alimentos, medicamentos, materiais de higiene, doações e equipamentos cheguem aos locais certos no momento adequado, apoiando resgates, tratamentos veterinários, eventos de adoção e campanhas solidárias.",
    icon: Truck,
  },
  {
    name: "Marketing",
    description:
      "O marketing ajuda a ONG Hopepet a divulgar seu trabalho de resgate de animais, atrair doadores e voluntários e aumentar as adoções. Com campanhas e publicações, a ONG mostra sua missão e conquista apoio da comunidade.",
    icon: Megaphone,
  },
];

export default function SectorsPage() {
  const [openSector, setOpenSector] = useState<string | null>(null);

  return (
    <Section id="sectors">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Nossa organização
        </span>

        <h1
          className={`${playfair.className} text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4`}
        >
          Conheça nossos setores
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg">
          Cada setor tem um papel importante no funcionamento da Hopepet.
          Conheça as áreas que trabalham juntas para fazer a diferença.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {sectors.map((sector) => {
          const Icon = sector.icon;
          const isOpen = openSector === sector.name;

          return (
            <div
              key={sector.name}
              className="bg-card border rounded-2xl p-6 text-center hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>

              <h2 className={`${playfair.className} text-xl font-bold mb-3`}>
                {sector.name}
              </h2>

              {isOpen && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {sector.description}
                </p>
              )}

              <button
                type="button"
                onClick={() =>
                  setOpenSector(isOpen ? null : sector.name)
                }
                aria-expanded={isOpen}
                className="flex items-center justify-center gap-2 mx-auto mt-4 text-sm font-semibold text-primary cursor-pointer"
              >
                {isOpen ? "Ver menos" : "Saiba mais"}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto mt-20 text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Estrutura organizacional
        </span>

        <h2
          className={`${playfair.className} text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6`}
        >
          Organograma Hopepet
        </h2>

        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Confira como nossa organização está estruturada e como os setores
          se conectam.
        </p>

        <div className="bg-white rounded-2xl border p-4 md:p-8 shadow-sm">
          <Image
            src="/organograma.png"
            alt="Organograma da Hopepet"
            width={1200}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
