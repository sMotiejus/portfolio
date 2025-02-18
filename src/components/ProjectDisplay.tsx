import PlaceHolder from './../assets/project_placeholder.jpg';
import {FaGitAlt} from "react-icons/fa";

interface ProjectDisplayProps {
    title: string;
    description: string;
    imageSrc?: string;
    used?: string[];
    source?: { title: string; url: string }[];
}

const ProjectDisplay = ({title, description, used, source, imageSrc}: ProjectDisplayProps) => {
    return (
        <div className={"border-2 border-dotted w-full rounded-xl overflow-hidden p-5"}>
            <div className={"border w-full rounded-xl overflow-hidden"}>
                <img className={"h-[220px] w-full"} src={imageSrc ?? PlaceHolder}
                     alt="Project photo"/>
            </div>
            <div className={"pt-5 flex flex-col gap-5"}>
                <div className={"flex flex-col"}>
                    <div className={"comic-neue-bold text-2xl"}>{title}</div>
                    <div>{description}</div>
                </div>
                {
                    used && <div className={"flex gap-2 flex-wrap"}>
                        {used?.map((item, index) => (
                            <div className={"border rounded-xl px-2"} key={item + index}>{item}</div>
                        ))}
                    </div>
                }
                {
                    source && <div className={"flex gap-2"}>
                        {
                            source.map(({title, url}) => (
                                <button
                                    key={title}
                                    className={"homemade-button comic-neue-bold text-xl border-2 rounded-2xl flex gap-2 justify-center items-center px-1"}
                                    onClick={() => {
                                        const w = window.open(url, '_blank');
                                        if (w) {
                                            w.focus();
                                        }
                                    }}
                                >
                                    <FaGitAlt className="text-red-800"/>
                                    {title}
                                </button>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default ProjectDisplay;