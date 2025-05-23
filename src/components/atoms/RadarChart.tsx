"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { ChartConfiguration } from "chart.js";

export interface RadarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string;
      borderColor?: string;
      borderWidth?: number;
      pointBackgroundColor?: string;
      pointBorderColor?: string;
      pointHoverBackgroundColor?: string;
      pointHoverBorderColor?: string;
    }[];
  };
  height?: number;
  width?: number;
  options?: Partial<ChartConfiguration["options"]>;
  className?: string;
}

const RadarChart: React.FC<RadarChartProps> = ({
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
        type: "radar",
        data: {
          labels: data.labels,
          datasets: data.datasets.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor:
              dataset.backgroundColor || "rgba(75, 192, 192, 0.2)",
            borderColor: dataset.borderColor || "rgb(75, 192, 192)",
            borderWidth: dataset.borderWidth || 1,
            pointBackgroundColor:
              dataset.pointBackgroundColor || "rgb(75, 192, 192)",
            pointBorderColor: dataset.pointBorderColor || "#fff",
            pointHoverBackgroundColor:
              dataset.pointHoverBackgroundColor || "#fff",
            pointHoverBorderColor:
              dataset.pointHoverBorderColor || "rgb(75, 192, 192)",
          })),
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              beginAtZero: true,
              ticks: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.dataset.label}: ${context.raw}`;
                },
              },
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

export default RadarChart;
