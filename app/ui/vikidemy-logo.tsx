import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { yuseiMagic } from '@/app/ui/fonts';

export default function VikidemyLogo() {
  return (
    <div
      className={`${yuseiMagic.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[10deg]" />
      <p className="text-[44px]">Vikidemy</p>
    </div>
  );
}
