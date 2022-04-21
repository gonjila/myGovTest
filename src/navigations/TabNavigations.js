import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import { MainRoutes, ConversationRoutes, StatementRoutes, SignmentRoutes } from "./";

export const TabNavigations = () => {
  return (
    <Tab.Navigator initialRouteName="მთავარი" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="მთავარი" component={MainRoutes} />
      <Tab.Screen name="სასაუბრო" component={ConversationRoutes} />
      <Tab.Screen name="განცხადებები" component={StatementRoutes} />
      <Tab.Screen name="ხელმოწერა" component={SignmentRoutes} />
    </Tab.Navigator>
  );
};
