"use client";
import React, { useMemo } from "react";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Define a generic type for chart data
interface ChartData {
  [key: string]: any;
  name: string;
  value: number;
  band?: [number, number];
}

// Dynamic Progress Tracking Chart that automatically calculates confidence bands
export default function ProgressTrackingChart({
  data = null,
  title = "Progress Tracking",
  lineColor = "#fb2c36",
  bandColor = "#AD55144D",
  bandPercentage = 0.15, // How much the band varies from the main value (15% by default)
  yAxisDomain = null, // Auto-calculated if not provided
  xAxisKey = "name", // Key for x-axis values
  valueKey = "value", // Key for y-axis values
}: {
  data?: ChartData[] | null;
  title?: string;
  lineColor?: string;
  bandColor?: string;
  bandPercentage?: number;
  yAxisDomain?: [number, number] | null;
  xAxisKey?: string;
  valueKey?: string;
}) {
  // Default sample data if none is provided
  const defaultData: ChartData[] = [
    { name: "Monday", value: 4000 },
    { name: "Tuesday", value: 4600 },
    { name: "Wednesday", value: 3000 },
    { name: "Thursday", value: 2500 },
    { name: "Friday", value: 3500 },
    { name: "Saturday", value: 4100 },
    { name: "Sunday", value: 4800 },
  ];

  // Use provided data or fall back to default
  const chartData: ChartData[] = data || defaultData;

  // Process the data to include bands
  const processedData: ChartData[] = useMemo(() => {
    return chartData.map((item) => {
      const value = item[valueKey as keyof ChartData];
      const bandOffset = value * bandPercentage;
      return {
        ...item,
        // Add the band as a tuple [lower, upper]
        band: [Math.max(0, value - bandOffset), value + bandOffset],
      };
    });
  }, [chartData, valueKey, bandPercentage]);

  // Calculate Y-axis domain if not provided
  const calculatedDomain: [number, number] = useMemo(() => {
    if (yAxisDomain) return yAxisDomain;

    let min = Infinity;
    let max = -Infinity;

    processedData.forEach((item) => {
      // Check if band exists and update min/max
      if (item.band) {
        min = Math.min(min, item.band[0]);
        max = Math.max(max, item.band[1]);
      }
      // Also check the main value
      if (item[valueKey as keyof ChartData] !== undefined) {
        min = Math.min(min, item[valueKey as keyof ChartData]);
        max = Math.max(max, item[valueKey as keyof ChartData]);
      }
    });

    // Add 10% padding to the top and ensure the bottom is at least 0
    return [Math.floor(Math.max(0, min * 0.9)), Math.ceil(max * 1.1)];
  }, [processedData, valueKey, yAxisDomain]);

  // Extract unique categories for x-axis ticks
  const uniqueCategories = useMemo(() => {
    const categories: Record<string, boolean> = {};
    processedData.forEach((item) => {
      if (item[xAxisKey as keyof ChartData]) {
        categories[item[xAxisKey as keyof ChartData]] = true;
      }
    });
    return Object.keys(categories);
  }, [processedData, xAxisKey]);

  // Format x-axis ticks to show only unique categories
  const formatXAxis = (tickItem: string) => {
    // Find all indices where this category appears
    const indices = processedData
      .map((item, index) =>
        item[xAxisKey as keyof ChartData] === tickItem ? index : -1
      )
      .filter((index) => index !== -1);

    // If there are multiple occurrences, only show the label for the middle one
    if (indices.length > 0) {
      const middleIndex = indices[Math.floor(indices.length / 2)];
      const currentIndex = processedData.findIndex(
        (item) => item[xAxisKey as keyof ChartData] === tickItem
      );

      return currentIndex === middleIndex ? tickItem : "";
    }

    return tickItem;
  };

  // Custom tooltip to show value and day
  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: any[];
  }) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-300 shadow-md">
          <p className="font-medium">{item[xAxisKey]}</p>
          <p style={{ color: lineColor }}>Value: {item[valueKey]}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.25rem",
          marginBottom: "1rem",
        }}
      >
        {title}
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={processedData}
          margin={{
            top: 20,
            right: 30,
            left: 40,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={xAxisKey}
            tickFormatter={formatXAxis}
            interval={0}
            axisLine={true}
            tickLine={true}
          />
          <YAxis domain={calculatedDomain} axisLine={true} tickLine={true} />
          <Tooltip content={<CustomTooltip />} />

          {/* Confidence interval area */}
          <Area
            type="monotone"
            dataKey="band"
            stroke="none"
            fill={bandColor}
            fillOpacity={1}
            connectNulls
            dot={false}
            activeDot={false}
          />

          {/* Main trend line */}
          <Line
            type="natural"
            dataKey={valueKey}
            stroke={lineColor}
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 6,
              fill: lineColor,
              stroke: "#fff",
              strokeWidth: 2,
            }}
            connectNulls
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
