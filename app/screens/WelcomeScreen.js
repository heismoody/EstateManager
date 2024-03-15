import React from "react";
import { FlatList, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function WelcomeScreen() {
  const [choices, setChoices] = useState([
    { id: 1, name: "Total Earning", context: "Tsh 100,000" },
    { id: 2, name: "No of Unpaid Rooms", context: 4 },
    { id: 3, name: "Last Year Earning", context: "Tsh 100,000" },
    { id: 4, name: "No of paid Rooms", context: 12 },
  ]);
  const [lists, setLists] = useState([
    { id: 1, name: "Payments" },
    { id: 2, name: "ToList" },
    { id: 3, name: "Complaint" },
  ]);

  return (
    <View className="flex-1 items-center ">
      <View className="w-[95%] flex flex-row justify-between items-center">
        <View className="h-fit pt-12">
          <Text className="font-black text-3xl w-fit">Dashboard</Text>
          <Text className="text-sm opacity-80">Welcome Back!</Text>
        </View>
        <View className="pt-12 pr-1">
          <Feather name="bell" size={20} color="black" />
        </View>
      </View>
      <View className="w-[95%] my-4 h-20 rounded-xl bg-slate-300">
        <Text>i'm here</Text>
      </View>
      <Text className="w-[95%] text-lg font-extrabold my-3">Quick Stats</Text>
      <FlatList
        className="w-[95%] flex-grow-0"
        numColumns={2}
        keyExtractor={(item) => item.id}
        key={2}
        data={choices}
        renderItem={({ item }) => (
          <View
            className={`rounded-lg px-3 py-5 mb-2 mr-2 w-[48%] ${
              item.id == 1 ? "bg-slate-300" : "bg-slate-400/70"
            }`}
          >
            <Text className="font-bold text-sm">{item.name}</Text>
            <Text
              className={`text-2xl font-extrabold ${
                item.id == 2 ? "text-red-600" : ""
              }`}
            >
              {item.context}
            </Text>
          </View>
        )}
      />
      <View className="w-[95%] py-2.5  mt-4 border-b-[1px] border-slate-400">
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <Text
              className={`font-extrabold text-slate-400 px-3 text-base ${
                item.id == 1 ? "text-black" : ""
              }`}
            >
              {item.name}
            </Text>
          )}
        />
      </View>
      <View className="bg-slate-300 w-[95%] p-3 mt-3 rounded-xl">
        <View className="flex flex-row justify-between">
          <Text className="text-lg font-bold ">Amanda Grant</Text>
          <View className="flex flex-row gap-2">
            <View className="p-1.5 bg-[#18a8e0] rounded-full">
              <Feather name="message-square" size={18} color="black" />
            </View>
            <View className="bg-[#44cf6c] p-1.5 rounded-full">
              <Feather name="phone-call" size={18} color="black" />
            </View>
          </View>
        </View>
        <Text className="opacity-80 text-xs font-normal pb-1">
          Paid For Month
        </Text>
        <Text className="text-base font-bold">APRIL - AUGUST</Text>
      </View>
    </View>
  );
}
