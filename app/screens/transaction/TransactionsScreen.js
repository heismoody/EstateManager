import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ScreenHeader from "../../components/ScreenComponents/ScreenHeader";
import TransactionCard from "../../components/ScreenComponents/TransactionCard";

export default function Transactions() {
  return (
    <>
      <ScreenHeader backButton title={"Transactions"} />
      
      <View className="mx-3 bg-slate-100 rounded-lg my-3">
        <MaterialIcons
          name="search"
          size={24}
          color="black"
          style={{ padding: 7, opacity: 0.5 }}
        />
      </View>
      <TransactionCard/>
      <TransactionCard/>
      <TransactionCard/>
      <TransactionCard/>
      <TransactionCard/>
    </>
  );
}
