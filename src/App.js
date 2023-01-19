import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./component/molecules/notFound/PageNotFound";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Header from "./pages/Header";
import Landing from "./pages/Landing";
import OauthCallback from "./pages/OauthCallback";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Log from "./component/organisms/Log";
import { ServicesContext } from "./utils/context/ServicesContext";

function App() {
  const { cart } = useContext(ServicesContext);
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Log />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/booking"
            element={<Booking data={cart.filter((c) => c.isBookable)} />}
          />
          <Route path="/accessories" element={<Gallery />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/oauth2callback" element={<OauthCallback />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
