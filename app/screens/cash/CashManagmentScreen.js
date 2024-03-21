import { View, Text } from "react-native";
import React from "react";
import ScreenHeader from "../../components/ScreenComponents/ScreenHeader";
import TenantListCard from "../tenants/components/TenantListCard";
import TransactionCard from "../../components/ScreenComponents/TransactionCard";

export default function CashManagmentScreen() {
  return (
    <>
      <ScreenHeader backButton title={"Cash Managment"} />
      <View className="flex-row justify-between p-3">
        <TenantListCard background={"#00B3DB"} title={"Balance"} number={"23.5M"} />
        <TenantListCard
          background={"#635CBB"}
          title={"Income"}
          number={"197M"}
        />
        <TenantListCard
          background={"#FA9418"}
          title={"Expenses"}
          number={"3M"}
        />
      </View>
      <Text className="px-3 pb-2 font-extrabold text-2xl text-black/60">
        History
      </Text>
      <View>
        <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>
      </View>
    </>
  );
}
