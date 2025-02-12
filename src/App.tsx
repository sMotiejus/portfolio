import Navbar from "./components/navbar/Navbar.tsx";
import BackgroundParticles from "./components/BackgroundParticles.tsx";
import About from "./components/About.tsx";
import Footer from "./components/Footer.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import WorkExperience from "./components/WorkExperience.tsx";

const App = () => {
    return (
        <div className={"bg-slate-700"}>
            <BackgroundParticles/>
            <Navbar/>
            <About/>
            <Skills/>
            <WorkExperience/>
            <Projects/>
            <Footer/>
        </div>
    );
};

export default App;
