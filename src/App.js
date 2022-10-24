import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
