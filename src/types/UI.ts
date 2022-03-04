export interface ImageButtonType {
    path: string;
    alt: string;
    size: number;
    onClick: () => void;
}

export interface IMenuItem {
    title: string;
    path: string;
    alt: string;
    onClick?: () => void;
}
