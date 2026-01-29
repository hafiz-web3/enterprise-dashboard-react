type Row = {
  id: number;
  name: string;
  status: string;
  usage: string;
};

export default function DataTable({ rows }: { rows: Row[] }) {
  return (
    <table width="100%" cellPadding={8}>
      <thead>
        <tr>
          <th align="left">Name</th>
          <th align="left">Status</th>
          <th align="left">Usage</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.status}</td>
            <td>{row.usage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
