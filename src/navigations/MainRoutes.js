import { FlatList, Pressable, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  Everything,
  Favourites,
  Main,
  Others,
  Property,
  Social,
  SearchDebtors,
} from "../components/main-components";

const Stack = createNativeStackNavigator();

export const MainRoutes = () => {
  const mainRoutesNames = ["ფავორიტები", "ყველა", "ძირითადი", "ქონება", "სოციალური", "სხვადასხვა"];

  const headerItems = (route, navigation) => (
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
  );

  const serviceScreenHeader = (navigation) => (
    <View style={tw`h-12 border-b border-b-gray-200 flex-row items-center justify-between`}>
      <Pressable onPress={() => navigation.navigate("ყველა")} style={tw`ml-4 flex-row items-center`}>
        <Ionicons name="chevron-back" size={22} />
        <Text style={tw`text-xs ml-2`}>ძებნა მოვალეთა რეესტრში</Text>
      </Pressable>

      <View style={tw`mr-4 flex-row items-center`}>
        <Pressable onPress={() => {}}>
          <Ionicons name="star" size={22} color="#FFB644" style={tw`mr-3`} />
          {/* if is not in favorites then name="star-outline" && color="black" */}
        </Pressable>
        <Pressable onPress={() => {}}>
          <Ionicons name="information-circle-outline" size={22} />
        </Pressable>
      </View>
    </View>
  );

  return (
    <Stack.Navigator
      initialRouteName="ყველა"
      screenOptions={({ route, navigation }) => ({
        animation: "none",
        header: () => headerItems(route, navigation),
      })}
    >
      <Stack.Screen name="ფავორიტები" component={Favourites} />
      <Stack.Screen name="ყველა" component={Everything} initialParams={{ itemId: 36 }} />
      <Stack.Screen name="ძირითადი" component={Main} />
      <Stack.Screen name="ქონება" component={Property} />
      <Stack.Screen name="სოციალური" component={Social} />
      <Stack.Screen name="სხვადასხვა" component={Others} />

      <Stack.Screen
        name="მოვალეები"
        component={SearchDebtors}
        options={{
          header: ({ navigation }) => serviceScreenHeader(navigation),
        }}
      />
    </Stack.Navigator>
  );
};
