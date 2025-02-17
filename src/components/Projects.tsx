import PageWrapper from "./PageWrapper.tsx";
import ProjectDisplay from "./ProjectDisplay.tsx";

import ClickedGame from '../assets/clicked.png';
import Emps from '../assets/emps.png';
import Lost from '../assets/lost.jpg';
import Atob from '../assets/atob.jpg';


const Projects = () => {
    return (<PageWrapper title={"PROJECTS"} id={"projects"} subtitle={"(some better, some worse)"}>
        <div className="flex flex-col gap-8">

            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 min-w-7/10"}>
                <ProjectDisplay title={"Clicker-based web game"}
                                description={"He focused on developing a clicker-based PHP/JavaScript game, with emphasis on login/registration using sessions and database operations."}
                                used={[
                                    "HTML", "CSS", "PHP", "JavaScript", "MySQL"
                                ]}
                                imageSrc={ClickedGame}
                                source={[
                                    {title: "Source", url: "https://github.com/sMotiejus/KTUClickED"}
                                ]}
                />
                <ProjectDisplay title={"Electric Vehicle Charging Station App"}
                                description={"He developed an API for electric vehicle routes, considering charging station availability, using Express.js for backend development and contributing to a mobile app in Dart."}
                                imageSrc={Emps}
                                used={["Dart", "Flutter", "Express", "JavaScript", "MySQL"]}
                />

                <ProjectDisplay title={"Lost and found items app"}
                                description={"For Accenture Java Backend Courses he built a lost and found web app with Spring backend, React.js frontend, and managed MySQL database relationships."}
                                used={["React", "TypeScript", "Spring", "Java", "MySQL"]}
                                imageSrc={Lost}
                                source={[
                                    {title: "Client", url: "https://github.com/Ninedarter/Lost-Found_Front"},
                                    {title: "Server", url: "https://github.com/Ninedarter/Lost-Found_Back"}
                                ]}
                />
                <ProjectDisplay title={"Traveling advertisment and search app"}
                                description={"He developed a travel app for his final university project, using Spring for backend, React.js for frontend, and managing MySQL database relationships and API endpoints."}
                                used={["Dart", "Flutter", "Spring", "Java", "MySQL"]}
                                imageSrc={Atob}
                                source={[
                                    {title: "Mobile", url: "https://github.com/sMotiejus/AToB-mobile"},
                                    {title: "Web", url: "https://github.com/sMotiejus/AToB-admin-website"},
                                    {title: "Server", url: "https://github.com/sMotiejus/AToB-server"}
                                ]}
                />

            </div>
            <button className={`
            flex justify-center w-full border-2 border-dotted rounded-xl py-2 text-3xl homemade-button`}
                    onClick={() => {
                        const w = window.open('https://github.com/sMotiejus?tab=repositories', '_blank');
                        if (w) {
                            w.focus();
                        }
                    }}
            >ALL PROJECTS...
            </button>
        </div>
    </PageWrapper>);
};

export default Projects;