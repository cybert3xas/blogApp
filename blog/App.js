/*
 * Created on Sat Jan 13 2024
 *
 * Description: App.js is in charge of displaying the home screen through a navigator. 
 * This navigator is warapped in a custom provider that stores some records and passes
 * down to any childs of this file.
 * 
 * Author: Jonathan Argumedo
 */

import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext"; //we do this because we didn't export default 


const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title: 'Records'
  }
});

const App = createAppContainer(navigator);

//we can wrap the app here and make some modifications before exporting
export default () => {
  return(
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
