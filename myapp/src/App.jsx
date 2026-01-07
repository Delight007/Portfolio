import ContactMe from "./Components/ContactMe/ContactMe.jsx";
import GlobalProvider from "./Components/context/GlobalContext.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Nav from "./Components/Navbar/Nav.jsx";
import Skills from "./Components/skill/Skills.jsx";
import WorkExperience from "./Components/WorkExperience/WorkExperience.jsx";
function App() {
  return (
    <GlobalProvider>
      <div className="min-h-screen bg-[#060417] text-white font-poppins">
        <Nav />

        <div className="mx-auto max-w-[1300px] relative px-6 2xl:px-0">
          <Hero />
          <Skills />
          <WorkExperience />
          <ContactMe />
          <Footer />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
