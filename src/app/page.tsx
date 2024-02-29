import { CartListItem } from '@/components/CarListItem';

export default function Home() {
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
  ];
  return (
    <main className="p-4 lg:p-8">
      {cars.map((car) => (
        <CartListItem.Root key={car.id}>
          <CartListItem.Thumbnail imageUri={car.image} />
          <CartListItem.Content
            name={car.name}
            nextReservation={car.nextReservation}
          />
          <CartListItem.Actions />
        </CartListItem.Root>
      ))}
    </main>
  );
}
