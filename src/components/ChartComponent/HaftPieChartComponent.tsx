"use client";
import { Cell, Pie, PieChart } from "recharts";

const data = [{ name: "Group A", value: 400 }];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const HaftPieChartComponent = () => {
  return (
    <PieChart width={400} height={250}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={120}
        outerRadius={160}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        textRendering={"String"}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default HaftPieChartComponent;
