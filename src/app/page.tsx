import { CarTable } from '@/components/CarTable';

export default function Home() {
  const tableHeaders = ['Car', 'Next Reservation', 'Status', 'Rating'];
  const cars = [
    {
      id: 1,
      name: 'Mini Cooper 2020',
      image: '/assets/images/car.png',
      nextReservation: '11/07',
    },
    {
      id: 2,
      name: 'Mini Cooper 2020',
      image: '/assets/images/car.png',
      nextReservation: '11/07',
    },
    {
      id: 3,
      name: 'Mini Cooper 2020',
      image: '/assets/images/car.png',
      nextReservation: '11/07',
    },
    {
      id: 4,
      name: 'Mini Cooper 2020',
      image: '/assets/images/car.png',
      nextReservation: '11/07',
    },
    {
      id: 5,
      name: 'Mini Cooper 2020',
      image: '/assets/images/car.png',
      nextReservation: '11/07',
    },
    {
      id: 6,
      name: 'Mini Cooper 2020',
      image: '/assets/images/car.png',
      nextReservation: '11/07',
    },
    {
      id: 7,
      name: 'Mini Cooper 2020',
      image: '/assets/images/car.png',
      nextReservation: '11/07',
    },
  ];
  return (
    <main className="p-4 md:p-8">
      <CarTable.Table>
        <CarTable.Head tableHeaders={tableHeaders} />
        <CarTable.Body>
          {cars.map((car) => (
            <CarTable.Row key={car.id}>
              <td className="py-2 md:p-4 md:py-1">
                <CarTable.Thumbnail name={car.name} imageUri={car.image} />
              </td>

              <td className="py-2 hidden md:p-4 md:table-cell">
                <p className=" text-gray-500 text-sm"> {car.nextReservation}</p>
              </td>

              <td className="py-2 hidden md:p-4 md:table-cell">
                <CarTable.Status />
              </td>

              <td className="w-full py-2 pl-5 md:p-4 md:w-auto">
                <p className="font-semibold text-gray-900 md:hidden">
                  {car.name}
                </p>
                <p className="mt-2 mb-3.5 text-xs text-gray-500 md:hidden">
                  Next reservation: {car.nextReservation}
                </p>
                <CarTable.StarsEvaluation />
              </td>

              <td className="py-2 text-right align-top md:align-middle md:text-center">
                <CarTable.Actions />
              </td>
            </CarTable.Row>
          ))}
        </CarTable.Body>
      </CarTable.Table>
    </main>
  );
}
