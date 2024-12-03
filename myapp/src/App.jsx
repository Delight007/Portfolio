import Nav from "./Components/Navbar/Nav";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/skills/Skills";
import GlobalProvider from "./Components/context/GlobalContext";
function App() {
  return (
    <>
      <GlobalProvider>
        <Nav />
        <div className="content">
          <Hero />
          <Skills />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
