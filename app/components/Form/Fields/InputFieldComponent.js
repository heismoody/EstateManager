import React from "react";
import { View, TextInput, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function InputFieldComponent({
  icon,
  error,
  visible,
  ...others
}) {
  return (
    <View className={`${visible ? "mb-2" : "my-2"}`}>
      <View className="flex-row items-center bg-slate-200 rounded-lg px-2 py-2">
        <MaterialIcons name={icon} size={22} color="#0000009a" />
        <TextInput {...others} className="px-1.5 text-lg font-bold w-full" />
      </View>
      {(visible && error) && <Text className="text-red-600 px-2 font-bold">{error}</Text>}
    </View>
  );
}
