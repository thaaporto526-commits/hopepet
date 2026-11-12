import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { playfair } from "@/lib/fonts";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <Section id="contact">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Fale conosco
        </span>

        <h1 className={`${playfair.className} text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4`}>
          Entre em contato com a Hopepet
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg">
          Quer saber mais sobre nossos projetos, adoção ou como ajudar?
          Estamos à disposição para conversar com você!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card className="text-center">
          <CardHeader>
            <Mail className="w-8 h-8 text-primary mx-auto" />
            <h2 className={`${playfair.className} text-xl font-bold`}>
              E-mail
            </h2>
          </CardHeader>
          <CardContent>
            <a
              href="mailto:contato@hopepet.org.br"
              className="text-sm text-muted-foreground hover:text-primary break-all"
            >
              contato@hopepet.org.br
            </a>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Phone className="w-8 h-8 text-primary mx-auto" />
            <h2 className={`${playfair.className} text-xl font-bold`}>
              Telefone
            </h2>
          </CardHeader>
          <CardContent>
            <a
              href="tel:+5511974718383"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              (11) 97471-8383
            </a>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <MapPin className="w-8 h-8 text-primary mx-auto" />
            <h2 className={`${playfair.className} text-xl font-bold`}>
              Localização
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              São Paulo, SP - Brasil
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <a
          href="https://wa.me/5511974718383"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          <MessageCircle className="w-5 h-5" />
          Falar pelo WhatsApp
        </a>
      </div>
    </Section>
  );
}
