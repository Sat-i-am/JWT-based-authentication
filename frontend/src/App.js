import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Myregister from './pages/Myregister';
import Home from './pages/Home'
import Deleteuser from './pages/Deleteuser';
import Firstpage from './pages/Firstpage';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Secretpage from './pages/Secretpage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ='/' element={<Firstpage/>}></Route>
        <Route exact path='/register' element={<Myregister/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/logout' element={<Logout/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path= '/delete' element={<Deleteuser/>}></Route>
        <Route exact path= '/secretpage' element={<Secretpage/>}></Route>

      </Routes>
    </BrowserRouter> 
  );
}

export default App;
