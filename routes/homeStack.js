import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewPage from "../screens/reviewPage";

const screens = {
  Home: {
    screen: Home,
    natigationOptions: {

      title = 'Gamezone',
      //headerStyle: {backgroundCOlor: '#eee'}
    }
  },
  ReviewPage:{
    screen: ReviewPage,
    natigationOptions: {
      
      title = 'Review Details',
      //headerStyle: {backgroundCOlor: '#eee'}
    }
  }
} 


const HomeStack  = createStackNavigator (screens , {
  defaultNavigationOptions:{
    headerTintColor: "#444",
    headerStyle: {backgroundCOlor: '#eee' , height:60}

  }
});

export default HomeStack;

