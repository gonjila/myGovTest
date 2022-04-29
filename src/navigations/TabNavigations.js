import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

import { MainRoutes, ConversationRoutes, StatementRoutes, SignmentRoutes } from "./";

export const TabNavigations = () => {
  return (
    <Tab.Navigator
      initialRouteName="მთავარი"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          if (route.name === "მთავარი") {
            iconName = "home";
          } else if (route.name === "სასაუბრო") {
            iconName = "chatbubbles";
          } else if (route.name === "განცხადებები") {
            iconName = "albums";
          } else if (route.name === "ხელმოწერა") {
            iconName = "pencil";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="მთავარი" component={MainRoutes} />
      <Tab.Screen name="სასაუბრო" component={ConversationRoutes} />
      <Tab.Screen name="განცხადებები" component={StatementRoutes} />
      <Tab.Screen name="ხელმოწერა" component={SignmentRoutes} />
    </Tab.Navigator>
  );
};
