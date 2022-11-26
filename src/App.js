import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import Header from './Components/Header'
import NotFound from './Pages/404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Header/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/movie/detail/:id' element={<Detail/>}/>

        <Route path='*' element={<NotFound/>}/>


      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
