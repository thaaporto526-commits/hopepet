"use client";

import { useState } from "react";
import { Heart, Copy, QrCode, ShieldCheck, Package, Gift } from "lucide-react";
import { playfair } from "@/lib/fonts";

const pixKey = "hopepet-doacao-demo@exemplo.com";
const suggestedValues = ["10", "25", "50", "100"];

const donationItems = [
  "Ração para cães",
  "Ração para gatos",
  "Sachês e patês",
  "Cobertores e mantas",
  "Caminhas",
  "Brinquedos",
  "Coleiras e guias",
  "Produtos de higiene",
  "Produtos de limpeza",
  "Potes de água e comida",
];

function DemoQrCode() {
  const size = 21;

  function isFinder(row: number, col: number, top: number, left: number) {
    const r = row - top;
    const c = col - left;

    if (r < 0 || r > 6 || c < 0 || c > 6) return false;

    return (
      r === 0 ||
      r === 6 ||
      c === 0 ||
      c === 6 ||
      (r >= 2 && r <= 4 && c >= 2 && c <= 4)
    );
  }

  function isDark(row: number, col: number) {
    if (isFinder(row, col, 0, 0)) return true;
    if (isFinder(row, col, 0, 14)) return true;
    if (isFinder(row, col, 14, 0)) return true;

    return (
      (row * 7 + col * 11 + row * col) % 3 === 0 ||
      (row + col * 2) % 5 === 0
    );
  }

  return (
    <div
      className="grid grid-cols-[repeat(21,minmax(0,1fr))] gap-[2px] bg-white p-3 rounded-xl w-full max-w-[230px] aspect-square mx-auto"
      aria-label="QR Code ilustrativo, sem validade para pagamento"
    >
      {Array.from({ length: size * size }, (_, index) => {
        const row = Math.floor(index / size);
        const col = index % size;

        return (
          <div
            key={index}
            className={isDark(row, col) ? "bg-gray-900" : "bg-white"}
          />
        );
      })}
    </div>
  );
}

export default function DonatePage() {
  const [amount, setAmount] = useState("25");
  const [message, setMessage] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [productMessage, setProductMessage] = useState("");

  const formattedAmount = Number(amount || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  async function copyPixKey() {
    try {
      await navigator.clipboard.writeText(pixKey);
      setMessage("Chave Pix demonstrativa copiada!");
    } catch {
      setMessage("Não foi possível copiar. Selecione a chave manualmente.");
    }
  }

  function simulateDonation() {
    if (!amount || Number(amount) <= 0) {
      setMessage("Escolha um valor válido para continuar.");
      return;
    }

    setMessage(
      `Doação demonstrativa de ${formattedAmount} realizada com sucesso!`
    );
  }

  function toggleItem(item: string) {
    setSelectedItems((current) =>
      current.includes(item)
        ? current.filter((selected) => selected !== item)
        : [...current, item]
    );
    setProductMessage("");
  }

  function updateQuantity(item: string, quantity: number) {
    setQuantities((current) => ({
      ...current,
      [item]: Math.max(1, quantity),
    }));
    setProductMessage("");
  }

  function confirmProductDonation() {
    if (selectedItems.length === 0) {
      setProductMessage("Selecione pelo menos um item para continuar.");
      return;
    }

    const summary = selectedItems
      .map((item) => `${quantities[item] || 1}x ${item}`)
      .join(", ");

    setProductMessage(
      `Doação demonstrativa confirmada! Itens selecionados: ${summary}.`
    );
  }

  return (
    <main className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Faça a diferença
          </span>

          <h1
            className={`${playfair.className} text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5`}
          >
            Sua ajuda transforma vidas
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg">
            Cada contribuição representa uma oportunidade de cuidado,
            proteção e um futuro melhor para os animais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <section className="bg-card border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-7 h-7 text-primary" />
              <h2 className={`${playfair.className} text-2xl font-bold`}>
                Escolha sua doação
              </h2>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Selecione um valor para contribuir:
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {suggestedValues.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setAmount(value);
                    setMessage("");
                  }}
                  className={`rounded-xl border p-4 font-bold transition ${
                    amount === value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary"
                  }`}
                >
                  R$ {value},00
                </button>
              ))}
            </div>

            <label
              htmlFor="amount"
              className="block text-sm font-medium mb-2"
            >
              Ou digite outro valor:
            </label>

            <div className="flex items-center border rounded-xl px-4 mb-6">
              <span className="text-muted-foreground mr-2">R$</span>
              <input
                id="amount"
                type="number"
                min="1"
                step="0.01"
                value={amount}
                onChange={(event) => {
                  setAmount(event.target.value);
                  setMessage("");
                }}
                className="w-full py-3 bg-transparent outline-none"
                placeholder="Digite o valor"
              />
            </div>

            <button
              type="button"
              onClick={simulateDonation}
              className="w-full bg-primary text-primary-foreground rounded-xl py-4 font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              <Heart className="w-5 h-5" />
              Doar {formattedAmount}
            </button>

            {message && (
              <p
                role="status"
                className="mt-4 text-sm text-center text-primary font-medium"
              >
                {message}
              </p>
            )}
          </section>

          <section className="bg-card border rounded-2xl p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <QrCode className="w-7 h-7 text-primary" />
              <h2 className={`${playfair.className} text-2xl font-bold`}>
                Doação via Pix
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-4 mb-5">
              <DemoQrCode />
              <p className="text-xs text-red-600 font-semibold mt-3">
                QR Code ilustrativo — não realiza pagamentos.
              </p>
            </div>

            <p className="text-sm text-muted-foreground mb-2">
              Chave Pix demonstrativa:
            </p>

            <div className="bg-muted rounded-xl p-3 flex items-center gap-2 mb-4">
              <span className="text-sm break-all flex-1 text-left">
                {pixKey}
              </span>

              <button
                type="button"
                onClick={copyPixKey}
                aria-label="Copiar chave Pix demonstrativa"
                className="p-2 rounded-lg hover:bg-background transition"
              >
                <Copy className="w-5 h-5 text-primary" />
              </button>
            </div>

            <button
              type="button"
              onClick={copyPixKey}
              className="w-full border border-primary text-primary rounded-xl py-3 font-semibold hover:bg-primary/5 transition"
            >
              Copiar chave Pix
            </button>
          </section>
        </div>

        <section className="bg-card border rounded-2xl p-6 md:p-8 mt-8">
          <div className="flex items-center gap-3 mb-3">
            <Package className="w-7 h-7 text-primary" />
            <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold`}>
              Doe produtos para nossos animais
            </h2>
          </div>

          <p className="text-muted-foreground mb-7">
            Você também pode ajudar doando alimentos, acessórios e itens
            essenciais para o cuidado dos nossos cães e gatos. Escolha os
            produtos que deseja doar:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {donationItems.map((item) => {
              const selected = selectedItems.includes(item);

              return (
                <div
                  key={item}
                  className={`border rounded-xl p-4 transition ${
                    selected
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  }`}
                >
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => toggleItem(item)}
                      className="w-5 h-5 accent-primary"
                    />
                    <span className="font-medium">{item}</span>
                  </label>

                  {selected && (
                    <div className="mt-4 flex items-center gap-3">
                      <label
                        htmlFor={`quantity-${item}`}
                        className="text-sm text-muted-foreground"
                      >
                        Quantidade:
                      </label>
                      <input
                        id={`quantity-${item}`}
                        type="number"
                        min="1"
                        value={quantities[item] || 1}
                        onChange={(event) =>
                          updateQuantity(item, Number(event.target.value))
                        }
                        className="w-20 border rounded-lg px-3 py-2 bg-background"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 border-t pt-6">
            <p className="text-sm text-muted-foreground mb-4">
              {selectedItems.length === 0
                ? "Nenhum produto selecionado."
                : `${selectedItems.length} tipo(s) de produto selecionado(s).`}
            </p>

            <button
              type="button"
              onClick={confirmProductDonation}
              className="w-full sm:w-auto bg-primary text-primary-foreground rounded-xl px-8 py-4 font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              <Gift className="w-5 h-5" />
              Confirmar doação de produtos
            </button>

            {productMessage && (
              <p
                role="status"
                className="mt-4 text-sm text-primary font-medium break-words"
              >
                {productMessage}
              </p>
            )}
          </div>
        </section>

        <div className="mt-8 rounded-2xl bg-primary/5 border border-primary/10 p-5 text-center">
          <ShieldCheck className="w-7 h-7 text-primary mx-auto mb-2" />

          <p className="font-semibold mb-1">
            Ambiente de demonstração
          </p>

          <p className="text-sm text-muted-foreground">
            Esta página faz parte de um projeto acadêmico. Os valores,
            a chave Pix e o QR Code são fictícios. A seleção de produtos
            também é demonstrativa. Nenhum pagamento, transferência ou
            doação real será realizado.
          </p>
        </div>
      </div>
    </main>
  );
}
