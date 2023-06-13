import './App.css';
import Header from './component/Header';
import Counting from './component/Counting';

function App() {
  return (
    <div>
      <Header/>
      <Counting counter = "Counter 1"/>
      <Counting counter = "Counter 2"/>
      <Counting counter = "Counter 3"/>
    </div>
  );
}

export default App;
