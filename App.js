import { StyleSheet, Button, FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LayoutHeader from "./src/components/LayoutHeader";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Screen4 from "./src/screens/Screen4";
import Screen5 from "./src/screens/Screen5";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const mainRoutesNames = ["ფავორიტები", "ყველა", "ძირითადი", "ქონება", "სოციალური", "სხვადასხვა"];

  const MainRoutes = () => {
    return (
      <Stack.Navigator
        initialRouteName="ყველა"
        screenOptions={(route) => ({
          header: () => (
            <FlatList
              style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }}
              renderItem={({ item }) => <Button title={item} />}
              data={mainRoutesNames}
              keyExtractor={(item, index) => item + index}
              horizontal
            />
          ),
        })}
      >
        <Stack.Screen name="ფავორიტები" component={Screen5} />
        <Stack.Screen name="ყველა" component={Screen5} />
        <Stack.Screen name="ძირითადი" component={Screen5} />
        <Stack.Screen name="ქონება" component={Screen5} />
        <Stack.Screen name="სოციალური" component={Screen5} />
        <Stack.Screen name="სხვადასხვა" component={Screen5} />
      </Stack.Navigator>
    );
  };
  const ConversationRoutes = () => {
    return (
      <Stack.Navigator initialRouteName="მიმოწერა">
        <Stack.Screen name="მიმოწერა" component={Screen5} />
        <Stack.Screen name="წერილი" component={Screen5} />
        <Stack.Screen name="შეტყობინებები" component={Screen5} />
      </Stack.Navigator>
    );
  };
  const StatementRoutes = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="screen8" component={Screen5} />
      </Stack.Navigator>
    );
  };
  const SignmentRoutes = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="screen9" component={Screen5} />
      </Stack.Navigator>
    );
  };

  const TabNavigations = () => {
    return (
      <Tab.Navigator initialRouteName="მთავარი" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="მთავარი" component={MainRoutes} />
        <Tab.Screen name="სასაუბრო" component={ConversationRoutes} />
        <Tab.Screen name="განცხადებები" component={StatementRoutes} />
        <Tab.Screen name="ხელმოწერა" component={SignmentRoutes} />
      </Tab.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="screen"
          screenOptions={({ navigation }) => ({ header: () => LayoutHeader(navigation) })}
        >
          <Stack.Screen name="mainScreens" component={TabNavigations} />
          <Stack.Screen name="მოძებნა" component={Screen3} />
          <Stack.Screen name="ავტორიზაცია" component={Screen4} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainTitleWrapper: {
    flexDirection: "row",
  },
});
