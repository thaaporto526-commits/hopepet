import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
import { playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type PetLogoProps = {
  className?: string;
  textColor?: string;
};

export default function PetLogo({ className, textColor }: PetLogoProps) {
  return (
    <Link href="/" className={cn("flex flex-row items-center gap-3 sm:gap-2", className)}>
      <Image
        src={logo}
        width={40}
        height={40}
        alt="HopePet Logo"
        className="rounded-full sm:w-12 sm:h-12 aspect-square object-cover"
      />
      <p className={cn(playfair.className, "text-xl sm:text-2xl font-bold transition-colors", textColor ?? "text-foreground")}>
        Hopepet
      </p>
    </Link>
  );
}
