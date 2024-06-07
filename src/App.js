import Navbar from "./components/navbar";
import './App.css';
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Prediction from "./components/Prediction";

import Test from "./components/Test";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      {/* <UI /> */}
      <Test />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
