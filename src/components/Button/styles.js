import styled from "styled-components"

export const Button = styled.button`
    margin-top: 80px;
    width: 342px;
    height: 74px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: 0;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;


    &:hover{
        opacity: .8;
    }

    &:active{
        opacity: .5;
    }
`