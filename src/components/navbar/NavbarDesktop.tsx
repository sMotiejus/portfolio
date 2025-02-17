interface NavbarDesktopProps {
    pages: { href: string, title: string }[]
}

const NavbarDesktop = ({pages}: NavbarDesktopProps) => {
    return (
        <div className={`hidden lg:flex flex-col`}>
            <div className={"flex justify-center text-3xl"}>Meniu</div>
            <div className={`flex flex-col gap-4 border-2 rounded-xl pl-10 py-2 text-4xl`}>
                <ul role="list" className="list-disc">
                    {pages.map(({title, href}) => (
                        <li key={href}>
                            <a className="nav-menu" href={href}>{title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavbarDesktop;