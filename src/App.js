import logo from './logo.svg';
import './App.css';
import { Card } from './Components/card'
import { Title } from './Components/title';
import { Button } from './Components/buton';

function App() {
  return (
    <div className="App">
        <div className='root-container'>
            <Title />
            <Card />
            <Button />
        </div>    
    </div>
  );
}

export default App;
