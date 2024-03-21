import { View, Text } from "react-native";
import React from "react";
import ScreenHeader from "../../components/ScreenComponents/ScreenHeader";
import TenantListCard from "./components/TenantListCard";
import { MaterialIcons } from "@expo/vector-icons";
import TenantCard from "./components/TenantCard";

export default function TenantListScreen() {
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
        <TenantCard name={"Moody Amin"} houseNo={1} RoomNo={2}/>
        <TenantCard name={"Moody Amin"} houseNo={1} RoomNo={2}/>
        <TenantCard name={"Moody Amin"} houseNo={1} RoomNo={2}/>
        <TenantCard name={"Moody Amin"} houseNo={1} RoomNo={2}/>
      </View>
    </>
  );
}
