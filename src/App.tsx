import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
      <CheckoutPage/> */}
    </div>
  )
}

export default App
