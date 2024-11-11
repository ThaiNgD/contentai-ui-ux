import HaftPieChartComponent from "@/components/ChartComponent/HaftPieChartComponent";

const FormReport = () => {
  return (
    <div className="bg-white shadow-lg p-[50px] flex flex-col items-center rounded-xl">
      <h1 className="text-xl font-bold">Plagiarism Report</h1>
      <HaftPieChartComponent />
      <div className="w-full rounded-full border px-[20px] py-3">
        Kết quả tìm được:
      </div>
    </div>
  );
};

export default FormReport;
