import { View, Text } from "react-native";
import React from "react";

export default function TenantListCard({background, title, number}) {
  return (
    <View className="w-[32%] justify-center items-center p-4 rounded-lg" style={{backgroundColor: background}}>
      <Text className="text-white text-base font-semibold">{title}</Text>
      <Text className="text-white text-3xl font-extrabold">{number}</Text>
    </View>
  );
}
