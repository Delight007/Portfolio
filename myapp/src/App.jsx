import ContactMe from "./Components/ContactMe/contact";
import GlobalProvider from "./Components/context/GlobalContext";
import Footer from "./Components/Footer/foot";
import Hero from "./Components/hero/heroo";
import Nav from "./Components/Navbar/Nav";
import Skills from "./Components/skill/Skills";
import WorkExperience from "./Components/WorkExperience/work";
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
