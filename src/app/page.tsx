import { CarTable } from '@/components/CarTable';
import { cars } from '../../cars.json';

export default function Home() {
  const tableHeaders = ['Car', 'Next Reservation', 'Status', 'Rating'];
  return (
    <main className="p-4 md:p-8">
      <CarTable.Table>
        <CarTable.Head tableHeaders={tableHeaders} />
        <CarTable.Body>
          {cars.map((car) => (
            <CarTable.Row key={car.id} car={car}></CarTable.Row>
          ))}
        </CarTable.Body>
      </CarTable.Table>
    </main>
  );
}
