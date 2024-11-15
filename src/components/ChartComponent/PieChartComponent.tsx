"use client";
import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  // { name: "Group B", value: 300 },
  // { name: "Group C", value: 300 },
  // { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const PieChartComponent = () => {
  return (
    <div className="w-full flex justify-center" suppressHydrationWarning>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              textRendering={entry.value}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
