import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/navigation/TabsNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <View className="flex-1">
        <TabNavigator/>
      </View>
    </NavigationContainer>
  );
}
