import Nav from "./Components/Navbar/Nav";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/skills/Skills";
import GlobalProvider from "./Components/context/GlobalContext";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <GlobalProvider>
        <Nav />
        <div className="content">
          <Hero />
          <Skills />
          <WorkExperience />
          <ContactMe />
          <Footer />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
