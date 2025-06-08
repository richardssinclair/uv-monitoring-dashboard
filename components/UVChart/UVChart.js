"use client";
import styles from "./UVChart.module.scss";
import {
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const uvChart = ({ data }) => {
  const tickFormatter = (timeStr) =>
    new Date(timeStr).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className={styles.uvChart}>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <XAxis dataKey="uv_time" tickFormatter={tickFormatter} />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" name="total uv" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default uvChart;
