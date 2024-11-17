import { INavItemsProps } from "@/types";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";


export const navItems: INavItemsProps[] = [
    {
        name: 'Home',
        link: '/',
        icon: <FaHome/>
    },
    {
        name: 'Home',
        link: '/',
        icon: <FaHome/>
    },
]

export default function Navbar() {
    return (
        <>
            <FloatingNav
                navItems={navItems}
            />
        </>
    )
}
