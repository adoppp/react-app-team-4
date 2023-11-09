import { CSSProperties } from 'react';

type buttonSchema = 'gray' | 'orange';

export type ButtonProps = {
    label: string;
    buttonStyles?: buttonSchema;
    action: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customContainerStyles?: CSSProperties;
};