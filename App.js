import * as React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppProvider } from "./src/context/AppContext";
import {
  HomeScreen,
  SignInScreen,
  SignInPasswordScreen,
  CreateAccountScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
  BasicDetailsScreen,
  HomePageScreen,
  CategoriesScreen,
  ProductsByCategoryScreen,
  UserAccountScreen,
  OrdersScreen,
  NotificationsScreen,
  CartScreen,
  AllProductsScreen,
} from "./src/screens";

const Stack = createNativeStackNavigator();
const StackTwo = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackTwoFlow = () => {
  return (
    <StackTwo.Navigator initialRouteName="HomePage">
      <StackTwo.Screen
        name="HomePage"
        component={HomePageScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("UserAccount")}
            >
              <Image
                source={require("./assets/profile.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  backgroundColor: "#8e6cef",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./assets/cart.png")}
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: "center",
                    marginTop: 8,
                  }}
                />
              </View>
            </TouchableOpacity>
          ),
          headerStyle: {
            borderBottomColor: "transparent",
          },
        })}
      />
      <StackTwo.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            borderBottomColor: "transparent",
          },
        }}
      />
      <StackTwo.Screen
        name="ProductsByCategory"
        component={ProductsByCategoryScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            borderBottomColor: "transparent",
          },
        }}
      />
      <StackTwo.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            borderBottomColor: "transparent",
          },
        }}
      />
      <StackTwo.Screen
        name="AllProducts"
        component={AllProductsScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            borderBottomColor: "transparent",
          },
        }}
      />
    </StackTwo.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="StackTwoFlow">
      <Tab.Screen
        name="StackTwoFlow"
        component={StackTwoFlow}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/home.png")}
              style={{ width: 16, height: 16 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrdersScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/order.png")}
              style={{ width: 16, height: 16 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/notificationbing.png")}
              style={{ width: 16, height: 16 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="UserAccount"
        component={UserAccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/account.png")}
              style={{ width: 16, height: 16 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

const StackFlow = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerTitle: "",
          headerLeft: () => <></>,
          headerStyle: {
            borderBottomColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="SignInPassword"
        component={SignInPasswordScreen}
        options={{
          headerTitle: "",
          headerLeft: () => <></>,
          headerStyle: {
            borderBottomColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            borderBottomColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            borderBottomColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{
          headerTitle: "",
          headerLeft: () => <></>,
          headerStyle: {
            borderBottomColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="BasicDetails"
        component={BasicDetailsScreen}
        options={{
          headerTitle: "",
          headerLeft: () => <></>,
          headerStyle: {
            borderBottomColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <StackFlow />
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
