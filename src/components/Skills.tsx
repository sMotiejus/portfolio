import PageWrapper from "./PageWrapper.tsx";
import Skill from "./Skill.tsx";

import JavaScriptLogo from "../assets/javascript.svg";
import TypeScriptLogo from "../assets/typescipt.svg";
import ReactLogo from "../assets/react.svg";
import TailwindLogo from "../assets/tailwind.svg";
import PostgreSQLLogo from "../assets/postgresql.svg";
import MySQLLogo from "../assets/mysql.svg";
import PHPLogo from "../assets/php.svg";
import HTMLLogo from "../assets/html5.svg";
import CSSLogo from "../assets/css3.svg";
import SCSSLogo from "../assets/sass.svg";
import JavaLogo from "../assets/java.svg";
import CSharpLogo from "../assets/csharp.svg";
import DartLogo from "../assets/dart.svg";
import SpringLogo from "../assets/spring.svg";
import FlutterLogo from "../assets/flutter.svg";
import GitLogo from "../assets/git.svg";
import JiraLogo from "../assets/jira.svg";
import AgileLogo from "../assets/agilethin.svg";
import ExpressLogo from "../assets/express.svg";

const skillsData = [
    {
        title: "Languages",
        items: [
            {name: "JavaScript", icon: JavaScriptLogo},
            {name: "TypeScript", icon: TypeScriptLogo},
            {name: "PHP", icon: PHPLogo},
            {name: "Java", icon: JavaLogo},
            {name: "C#", icon: CSharpLogo},
            {name: "Dart", icon: DartLogo},
        ],
    },
    {
        title: "Web Technologies",
        items: [
            {name: "HTML", icon: HTMLLogo},
            {name: "CSS", icon: CSSLogo},
            {name: "SCSS", icon: SCSSLogo},
        ],
    },
    {
        title: "Frameworks & Libraries",
        items: [
            {name: "React", icon: ReactLogo},
            {name: "Spring", icon: SpringLogo},
            {name: "Flutter", icon: FlutterLogo},
            {name: "Express", icon: ExpressLogo},
            {name: "Tailwind", icon: TailwindLogo},
        ],
    },
    {
        title: "Databases",
        items: [
            {name: "MySQL", icon: MySQLLogo},
            {name: "PostgreSQL", icon: PostgreSQLLogo},
        ],
    },
    {
        title: "Tools & Methodologies",
        items: [
            {name: "Git", icon: GitLogo},
            {name: "Jira", icon: JiraLogo},
            {name: "Scrum (Agile)", icon: AgileLogo},
        ],
    },
];

const Skills = () => {
    return (
        <PageWrapper title="MY TOOLBOX" id="tech-stack" subtitle="(what I work with)">
            <div className="flex flex-col w-full gap-8">
                {skillsData.map((category) => (
                    <div
                        key={category.title}
                        className="border-2 border-dotted rounded-xl p-4 shadow-md bg-white"
                    >
                        <h3 className="text-2xl font-semibold mb-4">{category.title}:</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {category.items.map((skill) => (
                                <Skill key={skill.name} title={skill.name} icon={skill.icon}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default Skills;
