"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { ChartConfiguration } from "chart.js";

export interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor?: string;
      backgroundColor?: string;
      tension?: number;
      fill?: boolean;
    }[];
  };
  height?: number;
  width?: number;
  options?: Partial<ChartConfiguration["options"]>;
  className?: string;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  height = 300,
  width = 600,
  options = {},
  className = "",
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart
    const ctx = chartRef.current.getContext("2d");
    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: data.datasets.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: dataset.borderColor || "rgb(75, 192, 192)",
            backgroundColor:
              dataset.backgroundColor || "rgba(75, 192, 192, 0.2)",
            tension: dataset.tension || 0.4,
            fill: dataset.fill !== undefined ? dataset.fill : false,
          })),
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
              },
            },
            y: {
              display: true,
              title: {
                display: true,
              },
              beginAtZero: true,
            },
          },
          ...options,
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options]);

  return (
    <div className={`chart-container ${className}`} style={{ height, width }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineChart;
