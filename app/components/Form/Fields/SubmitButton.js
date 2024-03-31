import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function SubmitButton({title, onpress}) {
  return (
    <TouchableOpacity className="bg-[#625cbbc2] my-2 py-2 items-center rounded-lg" onPress={onpress}>
      <Text className="font-bold text-xl text-white uppercase">{title}</Text>
    </TouchableOpacity>
  );
}
