import {useState} from "react";
import {FaBars} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";

interface NavbarMobileProps {
    opaque?: boolean;
    pages: { href: string, title: string }[]
}

const NavbarMobile = ({opaque, pages}: NavbarMobileProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [disabled, setIsDisabled] = useState<boolean>(false)

    return (<>

            <div className={`flex lg:hidden
            fixed top-0 left-0 right-0
            h-14 text-3xl justify-end items-center px-6
            text-white z-20
            ${opaque ? "bg-slate-800/95" : ""}
            `}
            >
                <button onClick={() => {
                    if (disabled) {
                        return
                    }
                    setIsDisabled(true)
                    setIsOpen(!isOpen)
                    setTimeout(() => setIsDisabled(false), 100)
                }}
                        disabled={disabled}
                >
                    {
                        isOpen ? <FaXmark/> : <FaBars/>
                    }
                </button>

            </div>
            {isOpen &&
                (
                    <div className={`h-screen fixed w-full z-1
                     p-12 flex flex-col gap-4
                     bg-slate-800/95 text-white text-lg
                     `}>
                        {pages.map(({title, href}) =>
                            <a className={"nav-menu"} href={href} onClick={() => setIsOpen(false)}>{title}</a>)}
                    </div>)

            }

        </>
    );
};

export default NavbarMobile;