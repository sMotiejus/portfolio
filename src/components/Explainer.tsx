import {FaExternalLinkAlt} from "react-icons/fa";

interface ExplainerProps {
    date: string;
    title: string;
    location: string;
    locationLink?: string;
    bullets?: string[];
    used?: string[];
}

const Explainer = ({date, title, location, locationLink, bullets, used}: ExplainerProps) => {
    return (
        <div className={"flex gap-10 lg:gap-12 border-2 border-dotted rounded-xl p-2"}>
            <div className={"pt-1 text-2xl"}>
                {date}
            </div>
            <div className={"flex flex-col gap-1 lg:gap-2"}>
                <div className={"flex flex-col"}>
                    <div className={"font-bold text-3xl"}>{title}</div>
                    {locationLink ?
                        <a href={locationLink}
                           className={"flex items-center gap-2 text-2xl"}
                           target="_blank">{location}<FaExternalLinkAlt/></a> : location}
                </div>

                <ul role="list" className="list-disc pl-5 text-2xl">
                    {bullets?.map((item, index) => (
                        <li key={item + index}>{item}</li>
                    ))}
                </ul>

                <div className={"flex gap-2 flex-wrap"}>
                    {used?.map((item, index) => (
                        <div className={"border rounded-xl px-2"} key={item + index}>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explainer;