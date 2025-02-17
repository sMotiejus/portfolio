import LithuanianFlag from './../assets/lithuania-flag-icon.svg';
import Me from './../assets/me.png';

const About = () => {
    return (
        <div className="relative flex lg:hidden flex-col items-center gap-6 h-screen align-center pt-56">
            <div className={"border-2 rounded-xl p-5 w-44"}>
                <img src={Me} alt={"Me"}></img>
            </div>
            <p className="text-5xl lg:text-7xl content-center text-nowrap font-bold">
                Motiejus Šlimas
            </p>
            <div
                className="text-2xl lg:text-4xl text-nowrap">
                Full-Stack Developer
            </div>
            <p className="text-2xl lg:text-4xl flex  gap-5 items-center">
                <img src={LithuanianFlag} alt={"Lithuania"} className="h-[24px] lg:h-[32px]"/>
                Kaunas
            </p>


        </div>
    );
};

export default About;