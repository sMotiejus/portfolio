import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import WorkExperience from "./components/WorkExperience.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Contacts from "./components/Contacts.tsx";
import IntroductionCompressed from "./components/IntroductionCompressed.tsx";
import Education from "./components/Education.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    return (
        <div className={`flex flex-col lg:flex-row w-full`}>
            <div className={`w-0 lg:w-[400px] shrink-0`}>
                {/*PLACEHOLDER DIV*/}
                <div className={`fixed z-2 lg:h-screen lg:flex flex-col gap-16 lg:w-[400px] justify-around lg:p-4
                `}>
                    <IntroductionCompressed/>
                    <Navbar/>
                    <Contacts/>
                </div>
            </div>
            <div className={`flex flex-grow justify-center border-l shrink`}>
                <div className={`shrink w-4xl lg:w-fit lg:max-w-4xl`}>
                    <About/>
                    <Skills/>
                    <Education/>
                    <WorkExperience/>
                    <Projects/>
                    <Footer/>
                </div>
            </div>


        </div>
    );
};

export default App;
