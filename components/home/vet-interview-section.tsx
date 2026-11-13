import Image from "next/image";
import { Section } from "@/components/ui/section";
import { playfair } from "@/lib/fonts";
import { Heart, Stethoscope, PawPrint } from "lucide-react";

export default function VetInterview() {
  return (
    <Section className="bg-[#faf7f2]">
      <div className="grid items-center gap-10 rounded-3xl bg-[#f3eee5] p-6 md:grid-cols-2 md:p-12">
        <div>
          <div className="mb-4 flex items-center gap-2 text-[#98734d]">
            <Stethoscope size={20} />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Hopepet entrevista
            </span>
          </div>

          <h2
            className={`${playfair.className} mb-5 text-3xl font-bold text-[#493b31] md:text-4xl`}
          >
            Uma conversa sobre amor e cuidado
          </h2>

          <p className="mb-4 text-[#66594d]">
            Conheça a veterinária Daiane Vanessa em uma entrevista especial
            sobre saúde, cuidados e bem-estar animal.
          </p>

          <p className="mb-6 text-[#66594d]">
            Dicas e orientações importantes para quem ama e cuida dos pets!
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#98734d]">
            <Heart size={18} />
            <span>Informação também é uma forma de carinho.</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-[#493b31]">
            <PawPrint size={20} />
            <span className="font-semibold">Assista à entrevista completa!</span>
          </div>

          <Image
            src="/entrevista.png"
            alt="QR Code para assistir à entrevista com a veterinária Daiane Vanessa"
            width={280}
            height={280}
            className="h-auto w-full max-w-[250px]"
            unoptimized
          />

          <p className="mt-4 text-sm text-[#66594d]">
            Aponte a câmera do celular para o QR Code e confira a entrevista.
          </p>

          <span className="mt-2 text-xs font-medium text-[#98734d]">
            Daiane Vanessa • Médica veterinária
          </span>
        </div>
      </div>
    </Section>
  );
}
