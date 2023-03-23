import React from "react";

import { createStackNavigator,TransitionPresets} from "@react-navigation/stack";

import { RestaurantDetail } from "../../features/restaurants/screens/restaurantDetails.screen";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();



export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{...TransitionPresets.ModalPresentationIOS}} >
      <RestaurantStack.Screen
        name="Restaurant"
        component={RestaurantsScreen}
        options={{headerShown:false}}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
        options={{headerShown:false}}
      />
    </RestaurantStack.Navigator>
  );
};