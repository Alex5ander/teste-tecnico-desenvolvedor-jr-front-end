interface Props {
  tableHeaders: string[];
}

export function Head({ tableHeaders }: Props) {
  return (
    <thead className="h-0 absolute left-[-9999px] md:relative md:left-0 md:h-auto">
      <tr className="bg-gray-50 border-b border-b-gray-200 text-gray-500 text-left text-xs">
        {tableHeaders.map((header) => (
          <th className="p-4 font-semibold uppercase" key={header}>
            {header}
          </th>
        ))}
        <th className="p-4 font-semibold text-center uppercase">Actions</th>
      </tr>
    </thead>
  );
}
