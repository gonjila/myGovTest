import { View, Text } from "react-native";
import React from "react";

const Everything = ({ route }) => {
  const {
    params: { itemId },
  } = route;
  return (
    <View>
      <Text>In "Everything" page initialParams is "itemId" with {itemId} value</Text>
    </View>
  );
};

export default Everything;
