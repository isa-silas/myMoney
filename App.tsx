import { StatusBar } from 'react-native';
import { Panel } from './src/components/Panel';
import {Home} from './src/screens/Home';

export default function App() {
  return (
   <>
   <StatusBar barStyle='light-content'/>
   <Home/>
   </>
  );
}


