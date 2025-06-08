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
  Dot,
} from "recharts";

const uvChart = ({ data }) => {
  const tickFormatter = (timeStr) =>
    new Date(timeStr).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  // 1. Find the UV point closest to now
  const now = new Date();
  const currentUV = data.reduce((closest, item) => {
    const currentDiff = Math.abs(new Date(item.uv_time) - now);
    const closestDiff = Math.abs(new Date(closest.uv_time) - now);
    return currentDiff < closestDiff ? item : closest;
  }, data[0]);

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
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            name="total uv"
            dot={(props) => {
              const isCurrent =
                props.payload.uv_time === currentUV.uv_time;

              return (
                <circle
                  cx={props.cx}
                  cy={props.cy}
                  r={isCurrent ? 6 : 0}
                  fill={isCurrent ? "red" : "transparent"}
                  stroke="white"
                  strokeWidth={isCurrent ? 2 : 0}
                />
              );
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className={styles.text}>Tracking the UV level from the past day</p>
    </div>
  );
};

export default uvChart;
