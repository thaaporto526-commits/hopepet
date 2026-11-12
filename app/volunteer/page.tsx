"use client";

import { useState, type FormEvent } from "react";
import { Heart, Users, HandHeart, CheckCircle } from "lucide-react";
import { playfair } from "@/lib/fonts";
import { Section } from "@/components/ui/section";

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <Section id="volunteer">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Faça parte dessa causa
        </span>

        <h1
          className={`${playfair.className} text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5`}
        >
          Seja um voluntário
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg">
          Seu tempo, carinho e dedicação podem transformar a vida de muitos
          animais. Venha fazer parte da família Hopepet!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
        {[
          {
            icon: Heart,
            title: "Amor",
            description: "Ajude a cuidar de quem precisa.",
          },
          {
            icon: Users,
            title: "União",
            description: "Faça parte de uma equipe solidária.",
          },
          {
            icon: HandHeart,
            title: "Dedicação",
            description: "Compartilhe seu tempo e suas habilidades.",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-card border rounded-2xl p-5 text-center"
            >
              <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h2 className="font-bold mb-2">{item.title}</h2>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="max-w-2xl mx-auto bg-card border rounded-2xl p-6 md:p-8">
        <h2
          className={`${playfair.className} text-2xl md:text-3xl font-bold mb-2`}
        >
          Quero ser voluntário!
        </h2>

        <p className="text-sm text-muted-foreground mb-7">
          Preencha o formulário abaixo para demonstrar seu interesse.
        </p>

        {submitted ? (
          <div className="text-center py-10">
            <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />

            <h3 className={`${playfair.className} text-2xl font-bold mb-3`}>
              Obrigado pelo seu interesse!
            </h3>

            <p className="text-muted-foreground mb-6">
              Sua inscrição demonstrativa foi concluída. A Hopepet agradece
              por querer fazer parte dessa causa!
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-primary font-semibold hover:underline"
            >
              Voltar ao formulário
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Digite seu nome completo"
                className="w-full border rounded-xl px-4 py-3 bg-background outline-none focus:border-primary"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  className="w-full border rounded-xl px-4 py-3 bg-background outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full border rounded-xl px-4 py-3 bg-background outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="area" className="block text-sm font-medium mb-2">
                Como gostaria de ajudar?
              </label>
              <select
                id="area"
                name="area"
                required
                defaultValue=""
                className="w-full border rounded-xl px-4 py-3 bg-background outline-none focus:border-primary"
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option value="Cuidados com os animais">
                  Cuidados com os animais
                </option>
                <option value="Eventos e campanhas">
                  Eventos e campanhas
                </option>
                <option value="Divulgação e redes sociais">
                  Divulgação e redes sociais
                </option>
                <option value="Arrecadação de doações">
                  Arrecadação de doações
                </option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="availability"
                className="block text-sm font-medium mb-2"
              >
                Disponibilidade
              </label>
              <select
                id="availability"
                name="availability"
                required
                defaultValue=""
                className="w-full border rounded-xl px-4 py-3 bg-background outline-none focus:border-primary"
              >
                <option value="" disabled>
                  Selecione sua disponibilidade
                </option>
                <option value="Durante a semana">Durante a semana</option>
                <option value="Finais de semana">Finais de semana</option>
                <option value="Período integral">Período integral</option>
                <option value="Horários flexíveis">Horários flexíveis</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Conte um pouco sobre você (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Por que você gostaria de ser voluntário?"
                className="w-full border rounded-xl px-4 py-3 bg-background outline-none focus:border-primary resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground rounded-xl py-4 font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Enviar inscrição
            </button>
          </form>
        )}
      </div>

      <p className="text-xs text-center text-muted-foreground mt-6">
        Formulário demonstrativo para fins acadêmicos. Os dados não são
        armazenados nem enviados.
      </p>
    </Section>
  );
}
