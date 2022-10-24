import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
