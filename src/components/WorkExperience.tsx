import PageWrapper from "./PageWrapper.tsx";
import {GrUserWorker} from "react-icons/gr";

const WorkExperience = () => {
    return (<PageWrapper title={"work experience"} id={"work-experience"} icon={<GrUserWorker/>}>
        <div>
            test
        </div>
    </PageWrapper>);
};

export default WorkExperience;