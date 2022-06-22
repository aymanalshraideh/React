
import './App.css';
import Nav from './nav';
import Card from './card';
function App() {
  return (
   <>
     <Nav />
     <div class="container">
  <div class="row">
     <Card image='https://picsum.photos/200'  name='Ayman'/>
     <Card image='https://picsum.photos/201'  name='Ali'/>

     <Card image='https://picsum.photos/202'  name='Omar'/>
     <Card image='https://picsum.photos/203'  name='Ammar'/>
     <Card image='https://picsum.photos/204'  name='Khaled'/>

    </div>
    </div>

   </>
  );
}

export default App;
