import { Star } from '@/icons/Star';

interface Props {
  name: string;
  nextReservation: string;
}

export function Content(props: Props) {
  return (
    <div className="flex flex-col flex-1 justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-gray-900 font-semibold text-base">{props.name}</p>
        <p className="text-gray-500 font-normal text-xs">
          <span className="inline lg:hidden">Next reservation: </span>
          {props.nextReservation}
        </p>
      </div>
      <div className="flex">
        {[0, 1, 2, 3, 4].map((e) => (
          <Star key={e} className="cursor-pointer fill-[#111928]" />
        ))}
      </div>
    </div>
  );
}
