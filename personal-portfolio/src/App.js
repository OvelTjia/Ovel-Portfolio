import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Profil } from "./components/Profil";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Profil />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
