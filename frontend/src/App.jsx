import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Kids from "./pages/Kids/Kids";
import YourCart from "./pages/YourCart/YourCart";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import DeliveryDetail from "./pages/DeliveryDetail/DeliveryDetail";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure/PaymentFailure";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2000,
            style: {
              background: "#1f2937",
              borderRadius: "8px", 
              marginBottom: '25px'

            },
            success: {
              style: {
                color: "#16a34a",
              },
            },
            error: {
              style: {
                color: "#dc2626",
              },
            },
          }}
        />
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/cart" element={<YourCart />} />
            <Route path="/delivery-detail" element={<DeliveryDetail />} />
            <Route path="/success" element={<PaymentSuccess />} />
            <Route path="/failure" element={<PaymentFailure />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
