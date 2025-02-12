interface NavbarDesktopProps {
    opaque?: boolean;
    pages: { href: string, title: string }[]
}

const NavbarDesktop = ({opaque = true, pages}: NavbarDesktopProps) => {
    return (
        <div
            className={`
             hidden lg:flex
             fixed justify-center items-center
             h-14 top-0 left-0 right-0 
             text-white gap-2 md:gap-8 
             text-xl z-3
                ${opaque && "bg-slate-800/95"}
                `}
        >
            {
                pages.map(({title, href}, index) => {
                    return <>
                        {(index !== 0) && "|"}
                        <a className={`nav-menu`} href={href}>{title}</a>
                    </>
                })
            }
        </div>
    );
}

export default NavbarDesktop;