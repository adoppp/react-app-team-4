import { CSSProperties } from 'react';

export type iconSize = string | number | undefined;

export type iconTypes<T, B extends iconSize> = {
    iconId: T,
    w?: B,
    h?: B,
    customStyles?: CSSProperties;
}