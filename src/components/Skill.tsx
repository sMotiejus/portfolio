interface ISkillProps {
    icon: string;
    title: string;
    fit?: boolean;
}

const Skill = ({icon, title, fit = false}: ISkillProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={icon} alt={title} className={fit ? "w-full" : "w-[60px] h-[60px]"}/>
            {title}
        </div>
    );
};

export default Skill;