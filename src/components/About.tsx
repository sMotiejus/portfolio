import LithuanianFlag from './../assets/lithuania-flag-icon.svg';
import Me from './../assets/me.png';

const About = () => {
    return (
        <div className="relative flex flex-col items-center gap-4 h-screen align-center pt-32 drop-shadow-xl">
            <div
                className="flex flex-col items-center align-center w-64 lg:w-96 gap-2 bg-slate-600 rounded-xl">
                <div className={"border-6 border-b-0 rounded-t-xl border-slate-800 p-5 "}>
                    <img className={"drop-shadow-xl"} src={Me} alt={"Motiejus Šlimas"}></img>
                </div>
                <p className="font-medium text-white text-5xl lg:text-7xl content-center text-nowrap">
                    Motiejus <b>Šlimas</b>
                </p>
                <div
                    className="text-white text-2xl lg:text-4xl text-nowrap border-6 border-t-0 rounded-b-xl  w-64 lg:w-96 border-slate-800 p-5">
                    Full-Stack Developer
                </div>
            </div>
            <p className="text-white text-2xl lg:text-4xl flex  gap-5 items-center">
                <img src={LithuanianFlag} alt={"Lithuania"} className="h-[24px] lg:h-[32px]"/>
                Vilnius, Kaunas
            </p>


        </div>
    );
};

export default About;