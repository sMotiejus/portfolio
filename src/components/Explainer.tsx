import {FaExternalLinkAlt} from "react-icons/fa";

interface ExplainerProps {
    dateFrom: string;
    dateTo: string;
    title: string;
    location: string;
    locationLink?: string;
    bullets?: string[];
    used?: string[];
}

const Explainer = ({dateFrom, dateTo, title, location, locationLink, bullets, used}: ExplainerProps) => {
    return (
        <div className={"flex flex-col lg:flex-row lg:gap-12 border-2 border-dotted rounded-xl p-2"}>
            <div className={"pt-1 lg:text-2xl text-nowrap"}>
                {dateFrom} - {dateTo}
            </div>
            <div className={"flex flex-col gap-2 lg:gap-4"}>
                <div className={"flex flex-col"}>
                    <div className={"comic-neue-bold text-lg lg:text-3xl"}>{title}</div>
                    {locationLink ?
                        <a href={locationLink}
                           className={"flex items-center gap-2 lg:text-2xl"}
                           target="_blank">{location}<FaExternalLinkAlt/></a> :
                        <div className={"lg:text-2xl"}>{location}</div>}
                </div>
                {
                    bullets &&
                    <ul role="list" className="list-disc pl-4 lg:pl-0 lg:text-2xl">
                        {bullets?.map((item, index) => (
                            <li key={item + index}>{item}</li>
                        ))}
                    </ul>
                }
                {
                    used && <div className={"flex gap-2 flex-wrap"}>
                        {used?.map((item, index) => (
                            <div className={"border rounded-xl px-2"} key={item + index}>{item}</div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default Explainer;