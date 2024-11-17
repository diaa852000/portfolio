import { ReactNode } from "react";

export interface IMagicButtonProps {
    title: string;
    icon: ReactNode;
    position: "right" | "left";
    handleClick?: () => void;
    otherClasses?: string;
}

export interface INavItemsProps {
    name: string;
    link: string;
    icon?: JSX.Element;
}

export interface IProjectProps {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
}