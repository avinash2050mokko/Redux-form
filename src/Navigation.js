import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import UserForm from "./screen/UserForm";
import DisplayUser from "./screen/Display";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: UserForm

    },
    Display: {
      screen: DisplayUser
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
