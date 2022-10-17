import { StatusBar } from 'react-native';
// import {Home} from './src/screens/Home';
import {Register} from "./src/components/Register"
import {Category} from "./src/screens/Category"
export default function App() {
  return (
   <>
   <StatusBar barStyle='light-content'/>
   <Register/>
   {/* <Category/> */}
   </>
  );
}


