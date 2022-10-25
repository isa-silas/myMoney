import { StatusBar } from 'react-native';
// import {Home} from './src/screens/Home';
// import {Register} from "./src/components/Register"
import {Register} from "./src/screens/Register"
import {Category} from "./src/screens/Category"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Register" options={{headerShown:false}} component={Register}/>
    </Stack.Navigator>
   </NavigationContainer>
   
  );
}


