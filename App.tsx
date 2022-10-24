import { StatusBar } from 'react-native';
import { Cadastro } from './src/telas/Cadastro';
import { CategoriaSelecao } from './src/telas/CategoriaSelecao';
import { Inicial } from './src/telas/Inicial';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Cadastro />
    </>
  );
}
