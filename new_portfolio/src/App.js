import About from "./components/About";
import "./App.css";
// import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Project";
import Service from "./components/Service";
import ReactHooks from "./components/ReactHooks";
// import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Project />
      {/* <Blog /> */}
      <Contact />
      <Footer />
      {/* <ReactHooks /> */}
    </div>
  );
}

export default App;
