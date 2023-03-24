import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PreAuto from "./components/PreAuto";
import PostAuto from "./components/PostAuto";
import Increasing from "./components/Increasing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="position-relative">
        <NavBar />
        <HeroSection />
        <PreAuto />
      </div>
      <PostAuto />
      <Increasing />
      <Footer />
    </>
  );
}

export default App;
