import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Account from "./pages/Account";
import Booking from "./pages/Booking";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Header from "./pages/Header";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import OauthCallback from "./pages/OauthCallback";
import Services from "./pages/Services";
import Register from "./component/molecules/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/account" element={<Account />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/oauth2callback" element={<OauthCallback />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
