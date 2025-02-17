interface PageWrapperProps {
    id: string;
    title: string;
    children?: JSX.Element;
}

const PageWrapper = ({title, id, children}: PageWrapperProps) => {
    return (
        <div id={id} className={"min-h-screen"}>
            <div className="relative py-16 lg:py-8 px-16 flex flex-col gap-8 lg:gap-16 justify-center items-center">
                <div
                    className={"text-4xl lg:text-6xl text-nowrap font-bold flex"}>
                    {title}
                </div>
                {children}
            </div>
        </div>
    );
};

export default PageWrapper;