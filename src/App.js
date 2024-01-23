import './App.css';
import Layout from './components/Layout/Layout';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import {Routes, Route, Navigate} from "react-router-dom";
import Users from './components/Users/Users';
import Resource from './components/Resource/Resource';
import Menu from './components/Menu/Menu';



function App() {
  return (
    <div className="App">
          <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path={"/"} element={<Navigate to={"menu"}/>}/>
            <Route path="menu" element={<Menu/>} />
            <Route path="users" element={<Users/>} />
            <Route path='resource' element={<Resource/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
