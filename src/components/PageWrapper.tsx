interface PageWrapperProps {
    id: string;
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
    minFullPage?: boolean;
}

const PageWrapper = ({id, title, subtitle, children, minFullPage = false}: PageWrapperProps) => {
    return (
        <section id={id}
                 className={`${minFullPage ? "min-h-screen" : ""} flex flex-col items-center py-16 lg:py-8 px-4 gap-8`}>
            <div className="text-center">
                <h1 className="text-4xl lg:text-6xl font-bold">{title}</h1>
                {subtitle && <p className="text-2xl mt-2">{subtitle}</p>}
            </div>
            <div className="w-full max-w-6xl">{children}</div>
        </section>
    );
};

export default PageWrapper;
