import { View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import React from "react";

export default function Revenue() {
  return (
    <View>
      <BarChart
        data={{
          labels: ["2021", "2022", "2023", "2024"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={335} // from react-native
        height={220}
        yAxisSuffix="/="
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          color: (opacity = 1) => `rgba(200, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        style={{
          marginTop: 10,
          borderRadius: 8,
        }}
      />
    </View>
  );
}
