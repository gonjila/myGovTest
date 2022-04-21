import { StyleSheet, Button, FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LayoutHeader from "./src/components/LayoutHeader";
import { TabNavigations } from "./src/navigations/TabNavigations";
import Screen3 from "./src/screens/Screen3";
import Screen4 from "./src/screens/Screen4";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="screen"
          screenOptions={({ navigation, route }) => {
            if (route.name === "mainScreens") return { header: () => LayoutHeader(navigation) };
          }}
        >
          <Stack.Screen name="mainScreens" component={TabNavigations} />
          <Stack.Screen name="მოძებნა" component={Screen3} />
          <Stack.Screen name="ავტორიზაცია" component={Screen4} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
