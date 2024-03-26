import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

export default function TenantCard({ data, onpress }) {
  return (
    <TouchableWithoutFeedback onPress={onpress}>
      <View className="flex-row items-center justify-between bg-slate-100 rounded-lg px-3 py-4 mb-3">
        <View className="flex-row items-center">
          <View className="w-20 h-20 bg-blue-500 rounded-full overflow-hidden items-center justify-center">
            <View className="w-[95%] h-[95%] rounded-full overflow-hidden">
              <Image
                source={{
                  width: 80,
                  height: 80,
                  uri: "https://img.freepik.com/free-photo/positive-overjoyed-dark-skinned-man-points-with-both-index-fingers-hints-something-wears-casual-green-jumper-smiles-broadly_273609-23582.jpg?w=740&t=st=1710941687~exp=1710942287~hmac=c05573fc06b31accba2d29b62e8ae17d34430a8329cf2487d348cc77c1473bd6",
                }}
              />
            </View>
          </View>
          <View className="pl-3">
            <Text className="text-xl font-extrabold py-1.5">{data.name}</Text>
            <Text className="text-base font-extrabold text-black/60">
              House: {data.houseNo}
            </Text>
            <Text className="text-base font-extrabold text-black/60">
              Room: {data.RoomNo}
            </Text>
          </View>
        </View>
        <View>
          <View className="bg-green-600 p-1 rounded-lg">
            <MaterialIcons name="call" size={18} color="white" />
          </View>
          <View className="bg-blue-400 p-1 rounded-lg mt-1">
            <MaterialIcons name="message" size={18} color="white" />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
