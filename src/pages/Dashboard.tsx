import KpiCard from "../components/KpiCard";
import DataTable from "../components/DataTable";
import ChartPanel from "../components/ChartPanel";
import { kpis, tableData } from "../data/mockData";

export default function Dashboard() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Enterprise Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginTop: 16,
        }}
      >
        {kpis.map(kpi => (
          <KpiCard
            key={kpi.label}
            label={kpi.label}
            value={kpi.value}
          />
        ))}
      </div>

      <div style={{ marginTop: 32 }}>
        <ChartPanel />
      </div>

      <div style={{ marginTop: 32 }}>
        <DataTable rows={tableData} />
      </div>
    </div>
  );
}
