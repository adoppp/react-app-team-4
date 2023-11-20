import styled from 'styled-components';

const LiItem = styled.li`
cursor: pointer;
position: relative;
display: flex;
height: 206px;
justify-content: center;
align-items: center;
gap: 32px;
flex-shrink: 0;
border-radius: 12px;
outline: 1px solid rgba(239, 237, 232, 0.20);
overflow: hidden;
background: ${props => `linear-gradient(0deg, rgba(4, 4, 4, 0.50) 0%, rgba(4, 4, 4, 0.50) 100%), url(${props.src}), lightgray -37.481px 0px / 131.63% 100.971% no-repeat`};
background-position: 50% 50%;
background-size: cover;
background-repeat: no-repeat;

@media screen and (min-width: 375px){
    width: 335px;
}
@media screen and (min-width: 768px){
    width: 224px;
}
@media screen and (min-width: 1440px) {
width: 237px;
}
`

export {
    LiItem
}