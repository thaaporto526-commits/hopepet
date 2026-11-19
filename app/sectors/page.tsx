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
  Lightbulb,
} from "lucide-react";
import { playfair } from "@/lib/fonts";
import { Section } from "@/components/ui/section";

const sectors = [
  {
    name: "Administrativo",
    description:
      "Nosso setor é responsável por organizar e administrar a parte burocrática e a comunicação da ONG. Garantimos que tudo funcione de forma correta e transparente, cuidando de documentos, controle de gastos, atendimento ao público e apoio na captação de recursos.",
    image: "/adm.png",
    icon: BriefcaseBusiness,
  },
  {
    name: "Tecnologia da Informação",
    description:
      "O setor de TI é responsável pela infraestrutura tecnológica, sistemas de gestão e presença digital da ONG. Desenvolve e gerencia as plataformas para adoção online, gestão de voluntários e comunicação com doadores.",
    image: "/ti.png",
    icon: Laptop,
  },
  {
    name: "Recursos Humanos",
    description:
      "O RH é responsável por cuidar das pessoas e do ambiente de trabalho, atuando na contratação, treinamento, avaliação, gestão de benefícios e alinhamento dos objetivos da equipe com os da organização.",
    image: "/rh.png",
    icon: Users,
  },
  {
    name: "Logística",
    description:
      "O setor logístico da Hopepet é responsável por planejar, organizar e controlar todas as atividades relacionadas ao recebimento, armazenamento, distribuição e transporte de recursos destinados ao cuidado dos animais. Atua garantindo que alimentos, medicamentos, materiais de higiene, doações e equipamentos cheguem aos locais certos no momento adequado, apoiando resgates, tratamentos veterinários, eventos de adoção e campanhas solidárias.",
    image: "/logistica.png",
    icon: Truck,
  },
  {
    name: "Marketing",
    description:
      "O marketing ajuda a ONG Hopepet a divulgar seu trabalho de resgate de animais, atrair doadores e voluntários e aumentar as adoções. Com campanhas e publicações, a ONG mostra sua missão e conquista apoio da comunidade.",
    image: "/marketing.png",
    icon: Megaphone,
  },
];

const swotItems = [
  {
    key: "forcas",
    title: "Forças",
    subtitle: "Pontos positivos internos",
    color: "bg-green-50 border-green-200 text-green-800",
    bullet: "bg-green-600",
    points: [
      "Equipe e voluntários comprometidos com a missão da ONG.",
      "Organização das atividades e divisão de responsabilidades entre os setores.",
      "Presença digital e comunicação com a comunidade.",
      "Parcerias com clínicas e outros colaboradores.",
      "Sistemas e ferramentas que apoiam a gestão.",
    ],
  },
  {
    key: "fraquezas",
    title: "Fraquezas",
    subtitle: "Pontos que precisam melhorar",
    color: "bg-red-50 border-red-200 text-red-800",
    bullet: "bg-red-600",
    points: [
      "Recursos financeiros e orçamento limitados.",
      "Dependência de voluntários para algumas atividades.",
      "Frota própria limitada para transporte e resgates.",
      "Orçamento reduzido para ferramentas e publicidade.",
      "Possibilidade de alta rotatividade e sobrecarga da equipe.",
    ],
  },
  {
    key: "oportunidades",
    title: "Oportunidades",
    subtitle: "Possibilidades externas favoráveis",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    bullet: "bg-blue-600",
    points: [
      "Ampliação de parcerias com empresas, clínicas e universidades.",
      "Uso de plataformas digitais para doações e adoções.",
      "Automação de processos administrativos.",
      "Ações com influenciadores e campanhas de conscientização.",
      "Programas de estágio e capacitação de voluntários.",
    ],
  },
  {
    key: "ameacas",
    title: "Ameaças",
    subtitle: "Riscos e fatores externos",
    color: "bg-amber-50 border-amber-200 text-amber-800",
    bullet: "bg-amber-500",
    points: [
      "Instabilidade financeira e aumento dos custos operacionais.",
      "Problemas com documentação e exigências legais.",
      "Riscos de segurança cibernética.",
      "Aumento dos custos de combustível e transporte.",
      "Mudanças nos algoritmos das redes sociais e concorrência por atenção.",
    ],
  },
] as const;

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
                <div className="mt-5 text-left">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  <div className="border-t pt-5">
                    <h3
                      className={`${playfair.className} text-lg font-bold text-center mb-4`}
                    >
                      Organograma do setor
                    </h3>

                    <div className="bg-white rounded-xl border p-3">
                      <Image
                        src={sector.image}
                        alt={`Organograma do setor ${sector.name}`}
                        width={1000}
                        height={800}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() =>
                  setOpenSector(isOpen ? null : sector.name)
                }
                aria-expanded={isOpen}
                className="flex items-center justify-center gap-2 mx-auto mt-5 text-sm font-semibold text-primary cursor-pointer"
              >
                {isOpen ? "Ver menos" : "Conhecer setor"}
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

      <div className="max-w-5xl mx-auto mt-20">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Planejamento estratégico
          </span>

          <h2
            className={`${playfair.className} text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4`}
          >
            Análise SWOT geral da Hopepet
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            A Análise SWOT permite avaliar o cenário geral da Hopepet,
            identificando suas forças e fraquezas internas, além das
            oportunidades e ameaças externas. Essa análise contribui para
            o planejamento e para a tomada de decisões da organização.
          </p>
        </div>

        <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 md:p-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h3
              className={`${playfair.className} text-xl md:text-2xl font-bold text-foreground`}
            >
              Os quatro pilares da análise
            </h3>
          </div>

          <p className="text-muted-foreground text-sm text-center max-w-2xl mx-auto">
            Confira os principais fatores que influenciam o funcionamento
            e o desenvolvimento da ONG.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
          {swotItems.map((item) => (
            <div
              key={item.key}
              className={`rounded-2xl border p-5 md:p-6 ${item.color}`}
            >
              <h3 className={`${playfair.className} text-2xl font-bold`}>
                {item.title}
              </h3>

              <p className="text-sm opacity-80 mt-1 mb-5">
                {item.subtitle}
              </p>

              <ul className="space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <span
                      className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.bullet}`}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
