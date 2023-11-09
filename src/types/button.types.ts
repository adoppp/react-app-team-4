import { CSSProperties } from 'react';

export type ButtonProps = {
    label: string;
    isGray?: boolean;
    action: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customContainerStyles?: CSSProperties;
};