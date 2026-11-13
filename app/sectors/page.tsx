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
    icon: BriefcaseBusiness,
    swot: {
      forcas: ["Planejamento eficiente", "Organização dos setores"],
      fraquezas: ["Gestão financeira"],
      oportunidades: ["Parcerias estratégicas"],
      ameacas: [
        "Problemas com documentação",
        "Recursos financeiros limitados",
      ],
    },
  },
  {
    name: "Tecnologia da Informação",
    description:
      "O setor de TI é responsável pela infraestrutura tecnológica, sistemas de gestão e presença digital da ONG. Desenvolve e gerencia as plataformas para adoção online, gestão de voluntários e comunicação com doadores.",
    icon: Laptop,
    swot: {
      forcas: ["Sistemas modernos", "Equipe qualificada"],
      fraquezas: ["Orçamento limitado para ferramentas"],
      oportunidades: [
        "Automação de processos",
        "Plataformas de doação online",
      ],
      ameacas: ["Segurança cibernética", "Dependência de voluntários"],
    },
  },
  {
    name: "Recursos Humanos",
    description:
      "O RH é responsável por cuidar das pessoas e do ambiente de trabalho, atuando na contratação, treinamento, avaliação, gestão de benefícios e alinhamento dos objetivos da equipe com os da organização.",
    icon: Users,
    swot: {
      forcas: ["Voluntários engajados", "Programas de capacitação"],
      fraquezas: ["Alta rotatividade de voluntários"],
      oportunidades: [
        "Parcerias com universidades",
        "Programas de estágio",
      ],
      ameacas: [
        "Disponibilidade de tempo dos voluntários",
        "Burnout da equipe",
      ],
    },
  },
  {
    name: "Logística",
    description:
      "O setor logístico da Hopepet é responsável por planejar, organizar e controlar todas as atividades relacionadas ao recebimento, armazenamento, distribuição e transporte de recursos destinados ao cuidado dos animais. Atua garantindo que alimentos, medicamentos, materiais de higiene, doações e equipamentos cheguem aos locais certos no momento adequado, apoiando resgates, tratamentos veterinários, eventos de adoção e campanhas solidárias.",
    icon: Truck,
    swot: {
      forcas: ["Rede de voluntários motoristas", "Parcerias com clínicas"],
      fraquezas: ["Frota própria limitada"],
      oportunidades: [
        "Apps de carona solidária",
        "Parcerias com transportadoras",
      ],
      ameacas: ["Custos de combustível", "Disponibilidade de veículos"],
    },
  },
  {
    name: "Marketing",
    description:
      "O marketing ajuda a ONG Hopepet a divulgar seu trabalho de resgate de animais, atrair doadores e voluntários e aumentar as adoções. Com campanhas e publicações, a ONG mostra sua missão e conquista apoio da comunidade.",
    icon: Megaphone,
    swot: {
      forcas: ["Forte presença digital", "Conteúdo emocional engajador"],
      fraquezas: ["Orçamento para publicidade paga"],
      oportunidades: [
        "Influenciadores parceiros",
        "Viralização de campanhas",
      ],
      ameacas: [
        "Algoritmos das redes sociais",
        "Concorrência por atenção",
      ],
    },
  },
];

const swotItems = [
  {
    key: "forcas",
    title: "Forças",
    subtitle: "Pontos positivos internos",
    color: "bg-green-50 border-green-200 text-green-800",
    bullet: "bg-green-600",
  },
  {
    key: "fraquezas",
    title: "Fraquezas",
    subtitle: "Pontos que precisam melhorar",
    color: "bg-red-50 border-red-200 text-red-800",
    bullet: "bg-red-600",
  },
  {
    key: "oportunidades",
    title: "Oportunidades",
    subtitle: "Possibilidades externas favoráveis",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    bullet: "bg-blue-600",
  },
  {
    key: "ameacas",
    title: "Ameaças",
    subtitle: "Riscos e fatores externos",
    color: "bg-amber-50 border-amber-200 text-amber-800",
    bullet: "bg-amber-500",
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

      <div className="max-w-5xl mx-auto mb-14">
        <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2
              className={`${playfair.className} text-2xl md:text-3xl font-bold text-foreground`}
            >
              O que é Análise SWOT?
            </h2>
          </div>

          <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
            A Análise SWOT é uma ferramenta de planejamento estratégico
            utilizada para identificar os pontos fortes e fracos de uma
            organização, além das oportunidades e ameaças presentes no
            ambiente externo. Ela ajuda a compreender a situação de cada
            setor e a tomar decisões para melhorar seus resultados.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
              <strong className="text-green-800">Forças</strong>
              <p className="text-xs text-green-700 mt-1">
                Pontos positivos internos
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
              <strong className="text-red-800">Fraquezas</strong>
              <p className="text-xs text-red-700 mt-1">
                Pontos negativos internos
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
              <strong className="text-blue-800">Oportunidades</strong>
              <p className="text-xs text-blue-700 mt-1">
                Fatores externos favoráveis
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
              <strong className="text-amber-800">Ameaças</strong>
              <p className="text-xs text-amber-700 mt-1">
                Fatores externos de risco
              </p>
            </div>
          </div>
        </div>
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
                <div className="mt-4 text-left">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  <div className="border-t pt-5">
                    <h3
                      className={`${playfair.className} text-xl font-bold text-center mb-2`}
                    >
                      Análise SWOT
                    </h3>

                    <p className="text-xs text-muted-foreground text-center mb-4">
                      Análise estratégica do setor {sector.name}.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {swotItems.map((item) => (
                        <div
                          key={item.key}
                          className={`rounded-xl border p-4 ${item.color}`}
                        >
                          <h4 className="font-bold text-sm">
                            {item.title}
                          </h4>

                          <p className="text-xs opacity-80 mt-1 mb-3">
                            {item.subtitle}
                          </p>

                          <ul className="space-y-2">
                            {sector.swot[item.key].map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-2 text-sm"
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${item.bullet}`}
                                />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
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
                {isOpen ? "Ver menos" : "Conhecer setor e análise SWOT"}
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
