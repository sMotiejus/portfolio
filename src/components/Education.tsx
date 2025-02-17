import PageWrapper from "./PageWrapper.tsx";
import Explainer from "./Explainer.tsx";

const Education = () => {
    return (<PageWrapper title={"EDUCATION"} id={"education"}>
        <div className={"flex flex-col gap-8 lg:gap-12"}>
            <Explainer dateFrom={"09/2020"}
                       dateTo={"06/2024"}
                       title={"Bachelor's in Informatics Engineering"}
                       location={"Kaunas University Of Technology"}
                       locationLink={"https://admissions.ktu.edu/programme/b-informatics-engineering/"}
            />
            <Explainer dateFrom={"11/2023"}
                       dateTo={"12/2023"}
                       title={"Java Spring Backend Courses"}
                       location={"Accenture"}
                       locationLink={"https://www.accenture.com/us-en"}
                       used={["Java", "Spring Boot", "JUnit"]}
            />
        </div>
    </PageWrapper>);
};

export default Education;