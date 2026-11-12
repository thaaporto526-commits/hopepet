import Link from "next/link";
import { Handshake, Building2, Stethoscope, Sparkles, HeartPulse, ShieldCheck, ArrowRight } from "lucide-react";
import { playfair } from "@/lib/fonts";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const partners = [
  { id: 1, name: "PetShop Amigo", category: "Pet Shop & Banho", icon: Sparkles },
  { id: 2, name: "Clínica VetCare", category: "Atendimento Veterinário", icon: Stethoscope },
  { id: 3, name: "Ração Premium", category: "Alimentação Animal", icon: HeartPulse },
  { id: 4, name: "Farmácia Animal", category: "Medicamentos Veterinários", icon: ShieldCheck },
  { id: 5, name: "Pet Center", category: "Produtos & Acessórios", icon: Building2 },
  { id: 6, name: "Zoo Saúde", category: "Exames & Diagnósticos", icon: Stethoscope },
];

export default function PartnersSection() {
  return (
    <Section id="partners" className="bg-secondary text-secondary-foreground">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider bg-secondary-foreground/10 px-3 py-1 rounded-full mb-3">
          Nossos Parceiros
        </span>

        <h2 className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-secondary-foreground`}>
          Empresas que apoiam nossa causa
        </h2>

        <p className="text-base sm:text-lg text-secondary-foreground/90 text-pretty">
          Agradecemos a todas as empresas e marcas comprometidas com a causa animal que nos ajudam a transformar vidas todos os dias.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-background text-foreground shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary mb-3">
              <partner.icon className="w-6 h-6" />
            </div>

            <p className="font-semibold text-center text-sm leading-snug">
              {partner.name}
            </p>

            <span className="text-xs text-muted-foreground text-center mt-1">
              {partner.category}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-secondary-foreground/10 p-6 rounded-2xl text-center sm:text-left">
        <div>
          <h3 className="text-lg font-bold">
            Quer ser um parceiro da Hopepet?
          </h3>
          <p className="text-sm text-secondary-foreground/80">
            Junte sua empresa a uma rede do bem e faça a diferença para centenas de animais.
          </p>
        </div>

        <Button
          variant="basic"
          className="shrink-0 font-semibold px-5 py-5 sm:ml-auto"
          render={<Link href="/contact" />}
        >
          <Handshake className="w-4 h-4 text-secondary" />
          <span>Entre em contato</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </Section>
  );
}
