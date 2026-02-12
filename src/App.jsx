import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Package from "./pages/Package";
import Laptop from "./pages/Laptop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </header>
        <ToastContainer />

        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/laptops" element={<Laptop />}></Route>
            <Route path="/desk" element={<Package />}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
