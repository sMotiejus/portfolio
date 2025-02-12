interface PageWrapperProps {
    id: string;
    title: string;
    icon?: JSX.Element;
    children?: JSX.Element;
}

const PageWrapper = ({icon, title, id, children}: PageWrapperProps) => {
    return (
        <div id={id} className={"pt-14"}>
            <div className="bg-slate-600 relative drop-shadow-xl py-8 px-16 flex flex-col gap-8 lg:gap-16 justify-center
            items-center border-y border-slate-800/60">
                <div
                    className={"text-white text-2xl lg:text-4xl text-nowrap font-bold flex gap-3 items-center border-b-2 pb-1"}>
                    {title}
                    {icon}
                </div>
                {children}
            </div>
        </div>
    );
};

export default PageWrapper;