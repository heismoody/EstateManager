import { View, Text, Image } from "react-native";
import React from "react";
import ScreenHeader from "../../components/ScreenComponents/ScreenHeader";
import TransactionCard from "../../components/ScreenComponents/TransactionCard";

export default function TenantScreen({route}) {
  const individual = route.params;

  return (
    <>
      <ScreenHeader backButton title={"Tenant"} />
      <View className="flex-row justify-center">
        <View className="w-[93%] flex-row items-center justify-around py-3 my-2 rounded-lg bg-slate-100">
          <View className="rounded-full w-28 h-28 bg-blue-400 flex-row justify-center items-center">
            <View className="w-[95%] h-[95%] rounded-full bg-red-900 overflow-hidden">
              <Image
                source={{
                  width: 110,
                  height: 110,
                  uri: "https://img.freepik.com/free-photo/beautiful-african-female-feeling-grateful_181624-46352.jpg",
                }}
              />
            </View>
          </View>
          <View>
            <Text className="text-2xl font-extrabold">{individual.name}</Text>
            <Text className="text-base font-extrabold opacity-50">
              Contact No: 0684298314
            </Text>
            <Text className="text-base font-extrabold opacity-50">
              Alternative No: 0684298314
            </Text>
            <Text className="text-base font-extrabold opacity-50">
              Joined: 20/11/2023
            </Text>
            <Text className="text-base font-extrabold opacity-50">
              House No: {individual.houseNo}
            </Text>
            <Text className="text-base font-extrabold opacity-50">
              Room No: {individual.RoomNo}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row justify-center">
        <View className="w-[93%] flex-row items-center bg-slate-100 rounded-lg pt-2">
          <Text className="text-base font-extrabold text-[#635CBB] border-b-[2px] border-[#635CBB] py-[2px] mx-3">
            Transactions
          </Text>
          <Text className="text-base font-extrabold text-black/40">
            Documents
          </Text>
        </View>
      </View>
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
    </>
  );
}
