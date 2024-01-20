import './App.css';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='container'>
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  )
}

export default App
