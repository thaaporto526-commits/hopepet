"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { playfair } from "@/lib/fonts";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ContactPage() {
  const [animal, setAnimal] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nomeAnimal = params.get("animal") || "";
    const tipo = params.get("tipo") || "";

    setAnimal(nomeAnimal);

    if (tipo === "adocao" && nomeAnimal) {
      setAssunto(`Interesse em adoção: ${nomeAnimal}`);
      setMensagem(
        `Olá! Tenho interesse em adotar ${nomeAnimal}. Gostaria de saber mais sobre o processo de adoção.`
      );
    } else if (tipo === "mensagem" && nomeAnimal) {
      setAssunto(`Mensagem sobre ${nomeAnimal}`);
      setMensagem(
        `Olá! Gostaria de saber mais informações sobre ${nomeAnimal}.`
      );
    }
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEnviado(true);
  }

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

      <div className="max-w-3xl mx-auto mt-16">
        <div className="text-center mb-8">
          <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold text-foreground mb-3`}>
            Envie uma mensagem
          </h2>
          <p className="text-muted-foreground">
            Preencha o formulário abaixo. Será um prazer conversar com você!
          </p>
        </div>

        <Card>
          <CardContent className="p-6 md:p-8">
            {enviado ? (
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className={`${playfair.className} text-2xl font-bold mb-3`}>
                  Mensagem registrada!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Obrigado por entrar em contato com a Hopepet.
                  Esta é uma confirmação demonstrativa do nosso site.
                </p>
                <button
                  type="button"
                  onClick={() => setEnviado(false)}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {animal && (
                  <div className="bg-primary/10 rounded-xl p-4 text-sm">
                    Você está entrando em contato sobre:
                    <strong className="block text-primary mt-1">
                      {animal}
                    </strong>
                  </div>
                )}

                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    required
                    placeholder="Digite seu nome"
                    className="w-full border border-border rounded-xl px-4 py-3 bg-background outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    placeholder="seuemail@exemplo.com"
                    className="w-full border border-border rounded-xl px-4 py-3 bg-background outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium mb-2">
                    Assunto
                  </label>
                  <input
                    id="assunto"
                    type="text"
                    value={assunto}
                    onChange={(event) => setAssunto(event.target.value)}
                    required
                    placeholder="Sobre o que deseja conversar?"
                    className="w-full border border-border rounded-xl px-4 py-3 bg-background outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                    Sua mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    value={mensagem}
                    onChange={(event) => setMensagem(event.target.value)}
                    required
                    rows={5}
                    placeholder="Escreva sua mensagem..."
                    className="w-full border border-border rounded-xl px-4 py-3 bg-background outline-none focus:ring-2 focus:ring-primary resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  <Send className="w-5 h-5" />
                  Enviar mensagem
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Formulário demonstrativo para o projeto acadêmico.
                  Nenhum dado será enviado ou armazenado.
                </p>
              </form>
            )}
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
