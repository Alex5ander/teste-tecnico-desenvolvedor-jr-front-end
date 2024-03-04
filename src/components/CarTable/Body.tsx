interface Props {
  children: React.ReactNode;
}
export function Body({ children }: Props) {
  return <tbody>{children}</tbody>;
}
