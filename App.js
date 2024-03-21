import TenantListScreen from "./app/screens/tenants/TenantListScreen";
import TenantScreen from "./app/screens/tenants/TenantScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View } from "react-native";

export default function App() {
  return (
    <View className="flex-1">
      <TenantListScreen />
    </View>
  );
}
