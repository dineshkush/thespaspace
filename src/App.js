// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Header from './main/header/Header';
import Footer from './main/footer/Footer';

const phoneNumber = '+919990748347';
const emailId = 'Aarushiyadavrao@gmail.com';
const address = 'Scf-87&88, Sector 14 Main Rd, DLF Colony, Sector 14, Gurugram, Haryana 122001';

const socialMedia = [
  "https://www.facebook.com/thespaspacegurgaon",
  "#",
]

function App() {

  const [facebookLink, instagramLink] = socialMedia;

  return (
    <>
    <Header phone={phoneNumber} email={emailId} facebook={facebookLink} instagram={instagramLink} />
    <Home phone={phoneNumber} email={emailId} address={address} facebook={facebookLink} instagram={instagramLink} />
    <Footer />
    </>
  );
}

export default App;
