import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DevInfo from '../src/components/devInfo'
import Home from '../src/components/home';
import Error from '../src/components/Error';
import Footer from '../src/components/Footer';
import Form from '../src/components/Form';
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //     <home />
  // );
  root.render (
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='devinfo/:devId' element={<DevInfo ></DevInfo>} />
        <Route path="/formPage" element={<Form />}/>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </React.StrictMode>
  );

