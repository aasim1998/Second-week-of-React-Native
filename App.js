import 'react-native-gesture-handler';
import React , {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import  AppLoading  from 'expo-app-loading';
import Navigator from './routes/homeStack';


const getFonts = () => Font.loadAsync({
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')


});

export default function App() {
  const [fontsLoaded , setFontsLoaded] = useState(false);

  if(fontsLoaded){

    return (

      <Navigator/>
      
     
    );

  } else {
    return (
      <AppLoading
      
      startAsync = {getFonts}
      onError={console.warn}
      onFinish = {() => setFontsLoaded(true)}
      
      
      />
    )
   
    
  }

}

