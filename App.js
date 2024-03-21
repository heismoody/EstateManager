import CashManagmentScreen from "./app/screens/cash/CashManagmentScreen";
import PropertyScreen from "./app/screens/properties/PropertyScreen";
import TenantListScreen from "./app/screens/tenants/TenantListScreen";
import TenantScreen from "./app/screens/tenants/TenantScreen";
import Transactions from "./app/screens/transaction/TransactionsScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View } from "react-native";

export default function App() {
  return (
    <View className="flex-1">
      <PropertyScreen/>
    </View>
  );
}
