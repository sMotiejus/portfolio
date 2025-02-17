import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import WorkExperience from "./components/WorkExperience.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Contacts from "./components/Contacts.tsx";
import IntroductionCompressed from "./components/IntroductionCompressed.tsx";
import Education from "./components/Education.tsx";

const App = () => {
    return (
        <div className={`flex flex-col lg:flex-row w-full`}>
            <div className={`w-0 lg:w-21/100`}>
                {/*PLACEHOLDER DIV*/}
                <div className={`fixed z-2 lg:h-screen lg:flex flex-col gap-16 flex-grow lg:w-21/100 justify-around lg:p-4
                `}>
                    <IntroductionCompressed/>
                    <Navbar/>
                    <Contacts/>
                </div>
            </div>
            <div className={`lg:w-79/100 border-l`}>
                <About/>
                <Skills/>
                <Education/>
                <WorkExperience/>
                <Projects/>
            </div>


        </div>
    );
};

export default App;
