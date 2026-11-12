import {
  BriefcaseBusiness,
  Laptop,
  Users,
  Truck,
  Megaphone,
} from "lucide-react";
import { playfair } from "@/lib/fonts";
import { Section } from "@/components/ui/section";

const sectors = [
  {
    name: "Administrativo",
    description: "Organização e gestão das atividades da Hopepet.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Tecnologia",
    description: "Soluções digitais e suporte tecnológico.",
    icon: Laptop,
  },
  {
    name: "Recursos Humanos",
    description: "Gestão de pessoas e desenvolvimento da equipe.",
    icon: Users,
  },
  {
    name: "Logística",
    description: "Organização e coordenação das operações.",
    icon: Truck,
  },
  {
    name: "Marketing",
    description: "Comunicação, divulgação e relacionamento com o público.",
    icon: Megaphone,
  },
];

export default function SectorsPage() {
  return (
    <Section id="sectors">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Nossa organização
        </span>

        <h1 className={`${playfair.className} text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4`}>
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

          return (
            <div
              key={sector.name}
              className="bg-card border rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>

              <h2 className={`${playfair.className} text-xl font-bold mb-3`}>
                {sector.name}
              </h2>

              <p className="text-sm text-muted-foreground">
                {sector.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
