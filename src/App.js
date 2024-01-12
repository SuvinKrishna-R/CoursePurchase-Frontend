import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminAdd from './pages/AdminAdd';
import Register from './pages/Register';
import SinglwView from './pages/SinglwView';
import Login from './pages/Login';





function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='add' element={<AdminAdd></AdminAdd>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='singleview/:id' element={<SinglwView></SinglwView>}></Route>



     </Routes>
    </div>
  );
}

export default App;
