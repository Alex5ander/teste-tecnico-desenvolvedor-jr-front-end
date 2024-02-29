import { Check } from '@/icons/Check';
import Image from 'next/image';

interface Props {
  name: string;
  imageUri: string;
}

export function Thumbnail({ name, imageUri }: Props) {
  return (
    <div>
      <div className="relative inline-block align-middle w-[85px] h-[85px] md:w-[46px] md:h-[46px]">
        <Image
          src={imageUri}
          fill
          sizes="(min-width:1024px) 85px, 85px"
          priority
          alt="Imagem de um carro"
        />
        <div className="block md:hidden w-6 h-6 absolute top-0.5 left-0.5 bg-green-600 rounded-full fill-white flex items-center justify-center">
          <Check />
        </div>
      </div>
      <p className="hidden pl-2 md:inline text-sm text-gray-900">{name}</p>
    </div>
  );
}
