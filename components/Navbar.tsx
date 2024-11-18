import { IoCodeWorkingSharp } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { FloatingNav } from "./ui/FloatingNav";
import { GrNetwork } from "react-icons/gr";

export const navItems = [
    { name: "About", link: "#about", icon: <AiOutlineHome className="w-5 h-5" /> },
    { name: "Projects", link: "#projects", icon: <IoCodeWorkingSharp className="w-5 h-5" /> },
    { name: "Experiences", link: "#experiences", icon: <GrNetwork className="w-5 h-5" /> },
    { name: "Contact", link: "#contact", icon: < CiUser className="w-5 h-5" strokeWidth={'1.2px'}/> },
];

export default function Navbar() {
    return (
        <FloatingNav
            navItems={navItems}
        />
    )
}
