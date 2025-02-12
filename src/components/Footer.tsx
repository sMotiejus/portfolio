import {Tooltip} from "react-tooltip";
import {FaEnvelopeSquare, FaGithubSquare, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <div className={`text-white text-5xl 
         border-4  rounded-xl border-slate-800
          flex flex-col gap-3 lg:gap-6
          fixed bottom-0 right-0
          px-1 lg:px-2 py-1 lg:py-2
          mx-2 lg:mx-4 my-2 lg:my-4
          bg-slate-600
          `}>
            <Tooltip id="tooltip-for-mail" place={"left"}/>
            <a className={"footer"} data-tooltip-id={"tooltip-for-mail"} data-tooltip-content={"Write An Email"}
               href="mailto:motiejusslim@gmail.com" target="_blank"
               rel="noopener noreferrer">
                <FaEnvelopeSquare/>
            </a>
            <Tooltip id="tooltip-for-linkedin" place={"left"}/>
            <a className={"footer"} data-tooltip-id={"tooltip-for-linkedin"} data-tooltip-content={"LinkedIn"}
               href="https://www.linkedin.com/in/motiejusslimas/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            <Tooltip id="tooltip-for-github" place={"left"}/>
            <a className={"footer"} data-tooltip-id={"tooltip-for-github"} data-tooltip-content={"GitHub"}
               href="https://github.com/sMotiejus" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare/>
            </a>
        </div>
    );
};

export default Footer;