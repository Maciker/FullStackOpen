import './App.css';
import Mensaje from './Mensaje';
import Titulo from './Titulo';
import Descripcion from './Descripcion';

const App = () => {

  return (
    <div className="App">
      <Titulo />
      <Mensaje msg="https://fullstackopen.com"/>
      <Descripcion />
    </div>
  );
}

export default App;
