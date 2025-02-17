import PageWrapper from "./PageWrapper.tsx";
import Explainer from "./Explainer.tsx";

const WorkExperience = () => {
    return (<PageWrapper title={"WORK EXPERIENCE"} id={"work-experience"}>
        <div className={"flex flex-col gap-12"}>
            <Explainer dateFrom={"02/2024"}
                       dateTo={"05/2024"}
                       title={"Full Stack Internship"}
                       location={"MB “Aguru”, Kaunas"}
                       bullets={[
                           "Designed and fixed assigned components",
                           "Contributed to multiple design aspects of the project",
                           "Fixed bugs"
                       ]}
                       used={[
                           "React.JS", "TypeScript", "ASP.NET Core"
                       ]}
            />
            <Explainer dateFrom={"06/2022"}
                       dateTo={"08/2023"}
                       title={"WEB Junior developer"}
                       location={"Energy Advice, Kaunas"}
                       locationLink={"https://www.energyadvice.lt/en/"}
                       bullets={[
                           "Built dataset components and charts",
                           "Developed interactive, responsive UIs",
                           "Improved overall user experience"
                       ]}
                       used={["React.JS", "PrimeReact", "ReactQuery", "TypeScript", "SCSS", "CSS"]}
            />
        </div>
    </PageWrapper>);
};

export default WorkExperience;