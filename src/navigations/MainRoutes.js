import { FlatList, Pressable, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "twrnc";

import { Everything, Favourites, Main, Others, Property, Social } from "../components/main-components";

const Stack = createNativeStackNavigator();

export const MainRoutes = () => {
  const mainRoutesNames = ["ფავორიტები", "ყველა", "ძირითადი", "ქონება", "სოციალური", "სხვადასხვა"];

  return (
    <Stack.Navigator
      initialRouteName="ყველა"
      screenOptions={({ route, navigation }) => ({
        animation: "none",
        header: () => (
          <FlatList
            style={tw`border-b border-b-gray-400 `}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  tw`text-xs my-2 mx-1 px-3 py-2 border border-gray-400 rounded-full`,
                  item === route.name ? tw`bg-black` : "",
                ]}
                onPress={() => navigation.navigate(item)}
              >
                <Text style={item === route.name ? tw`text-white` : ""}>{item}</Text>
              </Pressable>
            )}
            data={mainRoutesNames}
            keyExtractor={(item, index) => item + index}
            horizontal
          />
        ),
      })}
    >
      <Stack.Screen name="ფავორიტები" component={Favourites} />
      <Stack.Screen name="ყველა" component={Everything} />
      <Stack.Screen name="ძირითადი" component={Main} />
      <Stack.Screen name="ქონება" component={Property} />
      <Stack.Screen name="სოციალური" component={Social} />
      <Stack.Screen name="სხვადასხვა" component={Others} />
    </Stack.Navigator>
  );
};
