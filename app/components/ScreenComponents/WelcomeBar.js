import { View, Text } from "react-native";
import React from "react";

export default function WelcomeBar({title, number, color}) {
  return (
    <View className={`flex-row justify-between items-center px-5 py-3 rounded-lg mt-2.5`} style={{backgroundColor: color}}>
      <Text className="font-bold text-base">{title}</Text>
      <Text className="font-extrabold text-2xl">{number}</Text>
    </View>
  );
}
