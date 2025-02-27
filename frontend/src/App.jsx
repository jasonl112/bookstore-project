import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
