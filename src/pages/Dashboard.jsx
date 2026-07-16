import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <div className="stats-container">
        <StatCard title="Orders" value="245" />
        <StatCard title="Revenue" value="$12,500" />
        <StatCard title="Customers" value="132" />
        <StatCard title="Products" value="48" />
      </div>
    </>
  );
}

export default Dashboard;