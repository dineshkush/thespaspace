// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Header from './main/header/Header';
import Footer from './main/footer/Footer';

const phoneNumber = '+919990748347';
const emailId = 'info@thespaspace.com';

const socialMedia = [
  "https://www.facebook.com/thespaspacegurgaon",
  "#",
]

function App() {

  const [facebookLink, instagramLink] = socialMedia;

  return (
    <>
    <Header phone={phoneNumber} email={emailId} facebook={facebookLink} instagram={instagramLink} />
    <Home />
    <Footer />
    </>
  );
}

export default App;
