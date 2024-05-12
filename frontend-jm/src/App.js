import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/banner/Banner.js';
import SalesBoard from './components/saleBoard/SalesBoard.js';
import HouseContentsBoard from './components/HouseContentsBoard';
import ContactForm from './components/contactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <SalesBoard></SalesBoard>
      <HouseContentsBoard></HouseContentsBoard>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
