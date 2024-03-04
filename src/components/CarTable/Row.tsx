interface Props {
  children: React.ReactNode;
}

export function Row({ children }: Props) {
  return <tr className="border-b border-b-gray-200">{children}</tr>;
}
