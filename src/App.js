import css from './App.module.css';
import Layout from './components/Layout/Layout';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import {Routes, Route} from "react-router-dom";
import Users from './components/Users/Users';
import Resource from './components/Resource/Resource';
import Menu from './components/Menu/Menu';
import StartPage from './components/Pages/StartPage/StartPage';



function App() {
  return (
    <div className={css.App}>
          <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<StartPage/>} />
            <Route path="menu" element={<Menu/>} />
            <Route path="users" element={<Users/>} />
            <Route path='resource' element={<Resource/>} />
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </div>
  );
}

export default App;
