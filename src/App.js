import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Header/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/movie/detail/:id' element={<Detail/>}/>


      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
