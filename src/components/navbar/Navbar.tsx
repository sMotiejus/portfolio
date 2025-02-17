import NavbarDesktop from "./NavbarDesktop.tsx";
import NavbarMobile from "./NavbarMobile.tsx";


const Navbar = () => {
    const locationsMobile = [
        {href: "#", title: "Home"},
        {href: "#tech-stack", title: "Tech Stack"},
        {href: "#education", title: "Education"},
        {href: "#work-experience", title: "Work Experience"},
        {href: "#projects", title: "Projects"},
    ];

    const locationsDesktop = [
        {href: "#", title: "Tech Stack"},
        {href: "#education", title: "Education"},
        {href: "#work-experience", title: "Work Experience"},
        {href: "#projects", title: "Projects"},
    ];

    return <>
        <NavbarDesktop pages={locationsDesktop}/>
        <NavbarMobile pages={locationsMobile}/>
    </>;
}

export default Navbar;