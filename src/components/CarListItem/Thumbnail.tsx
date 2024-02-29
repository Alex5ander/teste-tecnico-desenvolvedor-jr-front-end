import { Check } from '@/icons/Check';
import Image from 'next/image';

interface Props {
  imageUri: string;
}

export function Thumbnail({ imageUri }: Props) {
  return (
    <div className="relative flex-none">
      <Image
        src={imageUri}
        width={85}
        height={85}
        style={{ width: 'auto', maxWidth: 85 }}
        priority
        alt="Imagem de um carro"
      />
      <div className="block lg:hidden w-6 h-6 absolute top-0 left-0 bg-green-600 rounded-full fill-white flex items-center justify-center">
        <Check />
      </div>
    </div>
  );
}
