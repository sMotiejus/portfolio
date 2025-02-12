import NavbarDesktop from "./NavbarDesktop.tsx";
import {useEffect, useState} from "react";
import NavbarMobile from "./NavbarMobile.tsx";


const Navbar = () => {
    const [opaque, setOpaque] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 90) {
                setOpaque(true);
            } else {
                setOpaque(false);
            }
        };
    }, []);

    const locations = [
        {href: "#", title: "about"},
        {href: "#skills", title: "skills"},
        {href: "#work-experience", title: "work experience"},
        {href: "#projects", title: "projects"},
    ];

    return <>
        <NavbarDesktop opaque={opaque} pages={locations}/>
        <NavbarMobile opaque={opaque} pages={locations}/>
    </>;
}

export default Navbar;