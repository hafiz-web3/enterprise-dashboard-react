type Props = {
  label: string;
  value: string | number;
};

export default function KpiCard({ label, value }: Props) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
      <div style={{ fontSize: 12, color: "#666" }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: 600 }}>{value}</div>
    </div>
  );
}
