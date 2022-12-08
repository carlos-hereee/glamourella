import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
// import Account from "./component/template/Account";
import Booking from "./pages/Booking";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Header from "./pages/Header";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import OauthCallback from "./pages/OauthCallback";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/account" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/check-out" element={<Checkout />} />
          <Route path="/oauth2callback" element={<OauthCallback />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
