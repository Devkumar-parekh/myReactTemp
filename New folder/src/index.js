import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import NoPage from './NoPage';
import User from './User';
import AxiosPage from './AxiosPage';
import Home from './Home';
import NavBar from './NavBar';
import Gallery from './Gallery';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          
          <Route index element={<Home name='Home'/>}/>
          <Route path='about' element={<About name='About' />} />
          <Route path='gallery' element={<Gallery name='Gallery' />} />
          <Route path="user/:userId/:name" element={<User name='User' />} />
          {/* <Route path='user' element={<User name='User' />} /> */}
          <Route path='axiospage' element={<AxiosPage name='AxiosPage' />} />
          <Route path="*" element={<NoPage name='NoPage'/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

