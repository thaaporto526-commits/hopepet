import "@/app/globals.css";
import { inter } from "@/lib/fonts";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Hopepet | ONG de Proteção Animal",
  description:
    "A Hopepet é uma ONG dedicada a resgatar, cuidar e encontrar lares amorosos para animais em situação de vulnerabilidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn("font-sans", inter.variable)}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
