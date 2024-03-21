import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeBar from "../components/ScreenComponents/WelcomeBar";
import Revenue from "../components/charts/Revenue";
import ScreenHeader from "../components/ScreenComponents/ScreenHeader";

const data = [
  {
    id: 1,
    name: "Add Property",
    icon: require('../../assets/icons/house.png'),
  },
  {
    id: 2,
    name: "Add Ternant",
    icon: require('../../assets/icons/client.png'),
  },
  {
    id: 3,
    name: "Add Transaction",
    icon: require('../../assets/icons/cash-flow.png'),
  },
  {
    id: 4,
    name: "Add Document",
    icon: require('../../assets/icons/documentation.png'),
  },
  {
    id: 5,
    name: "Reports",
    icon: require('../../assets/icons/report.png'),
  },
  {
    id: 6,
    name: "Add Ternats",
    icon: require('../../assets/icons/house.png'),
  },
];
export default function WelcomeScreen() {
  return (
    <>
      <ScreenHeader/>
      <View className="py-2 px-3">
        <Text className="text-[26px] font-extrabold">Hi, LandLord!</Text>
        <Text className="text-sm">Welcome Back</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        key={data.id}
        renderItem={({ item }) => (
          <View className="flex-grow m-[2px] py-4 w-[32%] border-[1px] rounded-md border-black/10 items-center">
            <Image
              source={item.icon}
              style={{
                height: 30,
                width: 30,
              }}
            />
            <Text className="font-bold text-sm pt-1 opacity-60">
              {item.name}
            </Text>
          </View>
        )}
        numColumns={3}
        className="flex-grow-0 px-3"
      />
      <View className="px-3">
        <WelcomeBar title={"Total Houses"} number={5} color={"#00B3DB"} />
        <WelcomeBar title={"Total Rooms"} number={10} color={"#635CBB"} />
        <WelcomeBar title={"Occupied"} number={5} color={"#FA9418"} />
      </View>
      <View className="mt-5 px-3">
        <View className="flex flex-row items-center justify-between">
          <Text className="font-bold text-lg">REVENUE</Text>
          <View className="flex-row items-center gap-x-1 border-[1px] border-black opacity-40 rounded-md">
            <Text className="font-bold text-base">House 1</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View>
          <Revenue />
        </View>
      </View>
    </>
  );
}
