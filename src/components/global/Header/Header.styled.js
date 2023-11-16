import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    background-color: transparent;

    font-size: 16px;
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
    color: #efede8;

    display: block;

    padding: 10px 27px;

    border-radius: 12px;
    border: 1px solid #efede84d;

    transition-property: background-color, border-color, fill, color, stroke,
        border-radius, padding;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: transparent;

        border-color: #e6533c;
    }

    &:active {
        background-color: #10100f;
    }

    &.active {
        background-color: #e6533c;

        border: 1px solid #e6533c;
    }

    @media screen and (max-width: 375px) {
        font-size: 14px;
    }
`;
