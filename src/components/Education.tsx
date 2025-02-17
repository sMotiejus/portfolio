import PageWrapper from "./PageWrapper.tsx";
import Explainer from "./Explainer.tsx";

const Education = () => {
    return (<PageWrapper title={"EDUCATION"} id={"education"}>
        <div className={"flex flex-col gap-16"}>
            <Explainer date={"Sep 2020 - Jun 2024"}
                       title={"Bachelor's in Informatics Engineering"}
                       location={"Kaunas University Of Technology"}
                       locationLink={"https://en.ktu.edu/"}
                       bullets={["test", "test2"]}
            />
            <Explainer date={"Nov 2023 - Dec 2023"}
                       title={"Java Spring Backend Courses"}
                       location={"Accenture"}
                       locationLink={"https://www.accenture.com/us-en"}
                       used={["Java", "Spring Boot"]}
            />
        </div>
    </PageWrapper>);
};

export default Education;