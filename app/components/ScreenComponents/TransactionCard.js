import { View, Text } from "react-native";
import React from "react";

export default function TransactionCard() {
  return (
    <View className="flex-row justify-center">
      <View className="w-[93%] bg-slate-100 my-2.5 p-3 rounded-lg">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold">Brooklyn Simmons</Text>
          <Text className="text-green-600 text-xl font-bold">100,000 Tsh</Text>
        </View>
        <View className="flex-row items-center justify-between py-1.5">
          <Text className="font-bold opacity-50 text-[15px]">
            Transaction Date:
          </Text>
          <Text className="font-bold opacity-50 text-[15px]">20/03/2024</Text>
        </View>
        <View className="flex-row items-center justify-between py-1.5">
          <Text className="font-bold opacity-50 text-[15px]">Rent:</Text>
          <Text className="font-bold opacity-50 text-[15px]">
            20/03/2024 - 20/06/2024
          </Text>
        </View>
      </View>
    </View>
  );
}
