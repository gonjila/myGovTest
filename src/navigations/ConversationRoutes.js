import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen5 from "../screens/Screen5";

const Stack = createNativeStackNavigator();

export const ConversationRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="მიმოწერა">
      <Stack.Screen name="მიმოწერა" component={Screen5} />
      <Stack.Screen name="წერილი" component={Screen5} />
      <Stack.Screen name="შეტყობინებები" component={Screen5} />
    </Stack.Navigator>
  );
};
