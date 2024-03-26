import React from "react";
import { View, StatusBar, Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ScreenHeader({ backButton = false, title }) {
  return (
    <View
      className="flex flex-row items-center justify-between bg-[#625cbbc2] p-3"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      {!backButton && <MaterialIcons name="menu" size={24} color="white" />}
      {backButton && (
        <View className="flex-row items-center gap-x-2 mt-3">
          <View className="border-[1px] rounded-md border-white ">
            <MaterialIcons name="chevron-left" size={24} color="white" />
          </View>
          <Text className="font-extrabold text-white text-2xl">{title}</Text>
        </View>
      )}
      {!backButton && (
        <View className="flex flex-row items-center gap-x-2">
          <MaterialIcons name="notifications-none" size={28} color="white" />
          <View className="w-10 h-10 bg-red-900 rounded-full overflow-hidden">
          <Image
            source={{
              width: 50,
              height: 70,
              uri: "https://img.freepik.com/free-photo/positive-overjoyed-dark-skinned-man-points-with-both-index-fingers-hints-something-wears-casual-green-jumper-smiles-broadly_273609-23582.jpg?w=740&t=st=1710941687~exp=1710942287~hmac=c05573fc06b31accba2d29b62e8ae17d34430a8329cf2487d348cc77c1473bd6",
            }}/>
          </View>
        </View>
      )}
    </View>
  );
}
