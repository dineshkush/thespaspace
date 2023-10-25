// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Header from './main/header/Header';
import Footer from './main/footer/Footer';

const phoneNumber = '+919990748347';
const emailId = 'Aarushiyadavrao@gmail.com';
const address = 'Scf-87&88, Sector 14 Main Rd, DLF Colony, Sector 14, Gurugram, Haryana 122001';
const addressLink = 'https://maps.app.goo.gl/L1yfqnuaLP6T4sez9';
const addressSecond = '1st Floor, Banni City Centre, BF 26, Sector 63, Gurugram, Haryana 122102';
const addressSecondLink = 'https://maps.app.goo.gl/L1yfqnuaLP6T4sez9';
const addressThird = 'bus stand, Shop no 9 10 Ground Floor Bicholiya Market, near Dharuhera, Dharuhera, Haryana 122106';
const addressThirdLink = 'https://maps.app.goo.gl/L1yfqnuaLP6T4sez9';

const socialMedia = [
  "https://www.facebook.com/thespaspacegurgaon",
  "#",
]

function App() {

  const [facebookLink, instagramLink] = socialMedia;

  return (
    <>
    <Header phone={phoneNumber} email={emailId} facebook={facebookLink} instagram={instagramLink} />
    <Home phone={phoneNumber} email={emailId} address={address} addressLink={addressLink} addressSecond={addressSecond} addressSecondLink={addressSecondLink} addressThird={addressThird} addressThirdLink={addressThirdLink} facebook={facebookLink} instagram={instagramLink} />
    <Footer phone={phoneNumber} />
    </>
  );
}

export default App;
