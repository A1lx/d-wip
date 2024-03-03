import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage';

function App() {
  return (
    <div className='site-container'>
      {/* <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/CheckoutPage" element={<CheckoutPage/>}/>
      </Routes>
      <Footer/> */}
      <Header/>
      <CheckoutPage/>
      <Footer/>
    </div>
  )
}

export default App;