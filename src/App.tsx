import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';
import { CheckoutPage } from './components/CheckoutPage/CheckoutPage';

function App() {
  return (
    <div className='container'>
      <Header/>
      <MainPage/>
      <Footer/>
      {/* <Header/>
      <CheckoutPage/>
      <Footer/> */}
    </div>
  )
}

export default App