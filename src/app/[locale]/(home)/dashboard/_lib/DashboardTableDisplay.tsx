import TableDashboard from "@/components/Table/TableDashboard";

const DashboardTableDisplay = () => {
  return (
    <div className="p-4 shadow-lg bg-white dark:bg-black border rounded-lg flex flex-col gap-4">
      <p className="dark:text-white text-black text-xl">Bảng thông tin</p>
      <TableDashboard />
    </div>
  );
};

export default DashboardTableDisplay;
