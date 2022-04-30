import { useState } from "react";
import { StyleSheet, View, Pressable, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";

import LayoutHeader from "./src/components/LayoutHeader";
import { TabNavigations } from "./src/navigations/TabNavigations";
import Profile from "./src/screens/Profile";
import Search from "./src/screens/Search";

import Help from "./src/components/Help";

const Stack = createNativeStackNavigator();

export default function App() {
  const [serchText, setSearchText] = useState("");

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="mainScreens">
          <Stack.Screen
            name="mainScreens"
            component={TabNavigations}
            options={({ navigation, route }) => ({ header: () => LayoutHeader(navigation) })}
          />

          <Stack.Screen
            name="მოძებნა"
            component={Search}
            // initialParams={{ serchText: serchText }}
            options={({ navigation }) => ({
              animation: "none",
              header: () => (
                <SafeAreaView style={tw`h-24 relative`}>
                  <View
                    style={tw`w-full bg-gray-100 border-b border-b-gray-300 flex-row items-center absolute bottom-0`}
                  >
                    <Pressable style={tw`ml-1 mr-4`} onPress={() => navigation.goBack()}>
                      <Ionicons name="chevron-back" size={32} />
                    </Pressable>

                    <TextInput
                      placeholder="asd"
                      style={tw`w-5/6 my-2 py-3 pl-6 bg-gray-300 rounded-full`}
                      onChangeText={(value) => setSearchText(value)}
                    />
                  </View>
                </SafeAreaView>
              ),
            })}
          />

          <Stack.Screen
            name="მომხმარებელი"
            component={Profile}
            options={{ headerBackTitleVisible: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <Help />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
