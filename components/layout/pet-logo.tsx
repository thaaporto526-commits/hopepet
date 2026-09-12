import Link from 'next/link';
import logo from '@/public/logo.png';
import Image from 'next/image';
import { playfair } from '@/lib/fonts'

export default function PetLogo() {
  return (
    <Link href="/" className='flex flex-row items-center gap-3 sm:gap-2'>
      <Image 
        src={logo}
        width={40}
        height={40}
        alt='HopePet Logo'
        className='rounded-full sm:w-12 sm:h-12 aspect-square object-cover'
      />
      <p className={`${playfair.className} text-xl sm:text-2xl font-bold transition-colors text-background`}>Hopepet</p>
    </Link>
  );
}
