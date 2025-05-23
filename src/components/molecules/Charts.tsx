"use client";

import LineChart from "../atoms/LineChart";
import RadarChart from "../atoms/RadarChart";

export default function Charts({}: { tenant: string; locale: string }) {
  //   if (!user) {
  //     return <div className="w-full m-auto">Loading ....</div>;
  //   }
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales 2023",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Sales 2022",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };
  const radarData = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "My Second Dataset",
        data: [28, 48, 40, 19, 96, 27, 100],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
      },
    ],
  };

  return (
    <div>
      <h1 className="text-black">Charts</h1>
      <div className="flex">
        <LineChart
          data={lineData}
          height={300}
          width={600}
          className="mx-auto"
          options={{
            plugins: {
              title: {
                display: true,
                text: "Monthly Sales Comparison",
              },
            },
          }}
        />
      </div>
      <div className="flex">
        <RadarChart
          data={radarData}
          height={400}
          width={400}
          className="mx-auto"
          options={{
            plugins: {
              title: {
                display: true,
                text: "Daily Activities Comparison",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
