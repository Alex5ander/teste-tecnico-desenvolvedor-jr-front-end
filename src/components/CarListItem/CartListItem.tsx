import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function CartItemList({ children }: Props) {
  return (
    <div
      className="py-2 flex justify-between border-b border-b-gray-200"
      style={{ gap: 20 }}
    >
      {children}
    </div>
  );
}
