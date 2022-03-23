//import logo from './logo.svg';
import { Form } from '../components/form/Form';
import { Header } from '../components/header/Header';
import { Menu } from '../components/menu/Menu';
import { PhotoDetailed } from '../components/pickofday/PhotoDetailed';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Header />
      <PhotoDetailed />
      <Form />
    </div>
  );
}

export default App;
