import  styled from 'styled-components';
export const Button=styled.button`
    background:${props=>props.primary ? 'blue':'red'};
    padding:${props=>props.padding ? '10px 20px':''};
    border:none;
    outline:none;
    &:hover{
        background:red;
        transition:all 0.5s;
    }
    &.button_style{
        font-size:25px;
    }
`
export const TomatoButton=styled(Button)`
    background:${props=>props.bg ? 'green':'yellow'};
    color:white;
    padding:${props=>props.padding ? '20px 30px':''};
    border:1px solid red
`