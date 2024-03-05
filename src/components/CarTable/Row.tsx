import { CarTable } from '.';

interface Props {
  car: {
    name: string;
    image: string;
    nextReservation: string;
  };
}

export function Row({ car }: Props) {
  return (
    <tr className="border-b border-b-gray-200 leading-none">
      <td className="py-2 md:px-4 md:py-1">
        <CarTable.Thumbnail name={car.name} imageUri={car.image} />
      </td>

      <td className="py-2 hidden md:p-4 md:table-cell">
        <p className=" text-gray-500 text-sm"> {car.nextReservation}</p>
      </td>

      <td className="py-2 hidden md:p-4 md:table-cell">
        <CarTable.Status />
      </td>

      <td className="w-full py-2 pl-5 md:p-4 md:w-auto">
        <p className="font-semibold text-gray-900 md:hidden">{car.name}</p>
        <p className="mt-2 mb-3.5 text-xs text-gray-500 md:hidden">
          Next reservation: {car.nextReservation}
        </p>
        <CarTable.StarsEvaluation />
      </td>

      <td className="py-2 text-right align-top md:align-middle md:text-center">
        <CarTable.Actions />
      </td>
    </tr>
  );
}
