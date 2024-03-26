import React from "react";
import { View, Text, FlatList, FlatListComponent } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import TenantCard from "./components/TenantCard";
import TenantListCard from "./components/TenantListCard";
import ScreenHeader from "../../components/ScreenComponents/ScreenHeader";

export default function TenantListScreen({navigation}) {
  const tenats = [{
    id: 1,
    name: "Moody Amin",
    houseNo: 1,
    RoomNo: 2
  },{
    id: 2,
    name: "Evans Victor",
    houseNo: 2,
    RoomNo: 2
  },{
    id: 3,
    name: "Amin Juma",
    houseNo: 2,
    RoomNo: 4
  },{
    id: 4,
    name: "Lailath Mustapha",
    houseNo: 3,
    RoomNo: 1
  }]
  return (
    <>
      <ScreenHeader backButton title={"Tenants List"} />
      <View className="flex-row justify-between p-3">
        <TenantListCard background={"#00B3DB"} title={"Total"} number={"123"} />
        <TenantListCard
          background={"#635CBB"}
          title={"Fully Paid"}
          number={"97"}
        />
        <TenantListCard
          background={"#FA9418"}
          title={"Partial Paid"}
          number={"3"}
        />
      </View>
      <Text className="px-3 font-extrabold text-2xl text-black/60">
        Tenant List
      </Text>
      <View className="mx-3 bg-slate-100 rounded-lg my-3">
        <MaterialIcons
          name="search"
          size={24}
          color="black"
          style={{ padding: 7, opacity: 0.5 }}
        />
      </View>
      <View className="px-3">
        <FlatList
          data={tenats}
          keyExtractor={(data) => data.id.toString()}
          key={tenats.id}
          renderItem={({item}) => (
            <TenantCard data={item} onpress={() => navigation.navigate("TenantDetails", item)} />
          )}
        />
      </View>
    </>
  );
}
