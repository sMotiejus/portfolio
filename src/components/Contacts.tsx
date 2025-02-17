import {FaEnvelope, FaGithub, FaLinkedinIn} from "react-icons/fa";
import {AiFillSave} from "react-icons/ai";
import LithuanianFlag from "../assets/lithuania-flag-icon.svg";
import {MdPhoneAndroid} from "react-icons/md";

const Contacts = () => {
    return (
        <div className={`flex flex-col text-white lg:text-black`}>
            <div className={`text-3xl hidden lg:flex justify-center`}>Contacts</div>
            <div className={`text-4xl lg:text-4xl px-1 lg:px-2 py-1 lg:py-2 m-1
             border-2 rounded-xl
             flex flex-row justify-around gap-4 z-100
             lg:grid lg:grid-cols-1
          `}>
                <p className="hidden lg:flex text-xl gap-1 lg:gap-4 items-center">
                    <img src={LithuanianFlag} alt={"Lithuania"} className="h-[25px]"/>
                    <span>Find Me In Kaunas, Lithuania</span>
                </p>

                <p className="hidden lg:flex  gap-4 items-center">
                    <MdPhoneAndroid/>
                    <span className={"text-xl"}>
                    067387973
                    </span>
                </p>

                <a className={"footer flex gap-4 items-center"} href="mailto:motiejusslim@gmail.com"
                   target="_blank" rel="noopener noreferrer">
                    <FaEnvelope/>
                    <p className={"hidden lg:block text-xl"}>motiejusslim@gmail.com</p>
                </a>


                {/*<a className={"footer flex gap-4 items-center"} href="mailto:motiejusslim@gmail.com"*/}
                {/*   target="_blank" rel="noopener noreferrer">*/}
                {/*    <BsSend/>*/}
                {/*    <p className={"hidden lg:block text-xl"}>Contact Me</p>*/}
                {/*</a>*/}

                <a className={"footer flex gap-4 items-center"} href="https://www.linkedin.com/in/motiejusslimas/"
                   target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn/>
                    <p className={"hidden lg:block text-xl"}>LinkedIn</p>
                </a>

                <a className={"footer flex gap-4 items-center"} href="https://github.com/sMotiejus"
                   target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                    <p className={"hidden lg:block text-xl"}>GitHub</p>
                </a>

                <a className={"footer flex gap-4 items-center"} href="mailto:motiejusslim@gmail.com"
                   target="_blank" rel="noopener noreferrer">
                    <AiFillSave/>
                    <p className={"hidden lg:block text-xl"}>CV</p>
                </a>
            </div>
        </div>
    );
};

export default Contacts;