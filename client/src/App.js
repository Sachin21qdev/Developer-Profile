import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DevInfo from '../src/components/devInfo'
import Home from '../src/components/home';
import Error from '../src/components/Error';
import Footer from '../src/components/Footer';
import FormPage from '../src/components/FormPage';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='devinfo/:devId' element={<DevInfo ></DevInfo>} />
        <Route path='*' element={<Error />} />
        <Route path="/FormPage" component={FormPage}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;