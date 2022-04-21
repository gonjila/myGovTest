import { FlatList, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen5 from "../screens/Screen5";

const Stack = createNativeStackNavigator();

export const MainRoutes = () => {
  const mainRoutesNames = ["ფავორიტები", "ყველა", "ძირითადი", "ქონება", "სოციალური", "სხვადასხვა"];

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
