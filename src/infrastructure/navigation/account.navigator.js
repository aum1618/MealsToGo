import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { AccountsScreen } from "../../features/accounts/screens/account.screen";
import { LoginScreen } from "../../features/accounts/screens/login.screen";
import { RegisterScreen } from "../../features/accounts/screens/register.screen";

export const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    
    <AccountStack.Navigator screenOptions={{headerShown:false}} >
      <AccountStack.Screen
        name="Main"
        component={AccountsScreen}
      />
      <AccountStack.Screen
        name="Login"
        component={LoginScreen}
      />
      <AccountStack.Screen
        name="Register"
        component={RegisterScreen}
      />
    </AccountStack.Navigator>
    
  );
};
