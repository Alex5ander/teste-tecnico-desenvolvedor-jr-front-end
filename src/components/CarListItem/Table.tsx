import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export function Table({ children }: Props) {
  return (
    <div className="md:rounded-lg md:overflow-hidden md:shadow bg-white">
      <table className="w-full h-full">{children}</table>
    </div>
  );
}
