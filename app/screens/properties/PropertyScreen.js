import { View, Text, Image, FlatList } from "react-native";
import React from "react";

import TenantListCard from "../tenants/components/TenantListCard";
import ScreenHeader from "../../components/ScreenComponents/ScreenHeader";

const houses = [
  {
    id: 1,
    No: 1,
    RoomCount: 3,
  },
  {
    id: 2,
    No: 2,
    RoomCount: 4,
  },
  {
    id: 3,
    No: 3,
    RoomCount: 5,
  },
  {
    id: 4,
    No: 4,
    RoomCount: 2,
  },{
    id: 4,
    No: 4,
    RoomCount: 2,
  },{
    id: 4,
    No: 4,
    RoomCount: 2,
  },
];

export default function PropertyScreen() {
  return (
    <>
      <ScreenHeader backButton title={"Properties"} />
      <View className="flex-row justify-between p-3">
        <TenantListCard background={"#00B3DB"} title={"Houses"} number={"5"} />
        <TenantListCard background={"#635CBB"} title={"Rooms"} number={"20"} />
        <TenantListCard
          background={"#FA9418"}
          title={"Occupied"}
          number={"15"}
        />
      </View>
      <Text className="px-3 font-extrabold text-2xl pb-3 text-black/60">
        Property List
      </Text>
      <View className="px-3">
        <FlatList
          data={houses}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({item}) => (
            <View className="bg-slate-100 items-center p-3 w-[49%] rounded-lg mr-2 mb-2">
              <View className="rounded-full bg-blue-100 w-24 h-24 items-center justify-center">
                <Image
                  style={{ width: 55, height: 55 }}
                  source={require("../../../assets/icons/houseimg.png")}
                />
              </View>
              <Text className="text-black/70 font-extrabold text-lg pt-2">
                House No: {item.No}
              </Text>
              <Text className="text-black/70 font-extrabold text-lg pt-0.5">
                No Rooms: {item.RoomCount}
              </Text>
            </View>
          )}
          numColumns={2}
        />
      </View>
    </>
  );
}
