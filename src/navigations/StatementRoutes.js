import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen5 from "../screens/Screen5";

const Stack = createNativeStackNavigator();

export const StatementRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="screen8" component={Screen5} />
    </Stack.Navigator>
  );
};
