import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import Admin from './pages/Admin';

import ViewAbout from './pages/About/ViewAbout'
import ViewBlog from './pages/Blog/ViewBlog'
import ViewNof from './pages/Nof/ViewNof'
import ViewQue from './pages/Que/ViewQue'
import ViewService from './pages/Service/ViewService'
import ViewTop from './pages/Top/ViewTop'

import AddAbout from './pages/About/AddAbout'
import AddBlog from './pages/Blog/AddBlog'
import AddNof from './pages/Nof/Addnof'
import AddQue from './pages/Que/AddQue'
import AddService from './pages/Service/AddService'

import EditAbout from './pages/About/EditAbout'
import EditBlog from './pages/Blog/EditBlog'
import EditNof from './pages/Nof/EditNof'
import EditQue from './pages/Que/EditQue'
import EditService from './pages/Service/EditService'
import EditTop from './pages/Top/EditTop'
import EditInfor from './pages/EditInfor'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/admin" element={<Admin />}/>

        <Route path="/view-about" element={<ViewAbout />}/>
        <Route path="/view-blog" element={<ViewBlog />}/>
        <Route path="/view-nof" element={<ViewNof />}/>
        <Route path="/view-que" element={<ViewQue />}/>
        <Route path="/view-service" element={<ViewService />}/>
        <Route path="/view-top" element={<ViewTop />}/>

        <Route path="/add-about" element={<AddAbout />}/>
        <Route path="/add-blog" element={<AddBlog />}/>
        <Route path="/add-nof" element={<AddNof />}/>
        <Route path="/add-que" element={<AddQue />}/>
        <Route path="/add-service" element={<AddService />}/>

        <Route path="/Edit-about" element={<EditAbout />}/>
        <Route path="/Edit-blog" element={<EditBlog />}/>
        <Route path="/Edit-nof" element={<EditNof />}/>
        <Route path="/Edit-que" element={<EditQue />}/>
        <Route path="/Edit-service" element={<EditService />}/>
        <Route path="/Edit-top" element={<EditTop />}/>
        <Route path="/Edit-infor" element={<EditInfor />}/>
      </Routes>
    </>
  );
}

export default App;
