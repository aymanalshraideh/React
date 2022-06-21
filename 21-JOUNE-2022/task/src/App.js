
import './App.css';
import Nav from './Components/nav';
import Title from './Components/title';
import Par from './Components/paragraph';
import Table from './Components/table';
function App() {
  return (
    <>
    <Nav />
    <Title />
    <Par />
    <Table img='https://picsum.photos/200' title='HTML'/>
    <Table img='https://picsum.photos/201' title='CSS'/>
    <Table img='https://picsum.photos/202' title='JAvaScript'/>


    

      </>
   
  );
}

export default App;
