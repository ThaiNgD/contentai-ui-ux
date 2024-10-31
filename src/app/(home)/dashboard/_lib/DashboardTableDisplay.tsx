import TableDashboard from "@/components/Table/TableDashboard";

const DashboardTableDisplay = () => {
  return (
    <div className="p-4 border rounded-lg flex flex-col gap-4">
      <p className="text text-xl">Bảng thông tin</p>
      <TableDashboard />
    </div>
  );
};

export default DashboardTableDisplay;
