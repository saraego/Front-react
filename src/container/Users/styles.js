import styled from "styled-components";
import Tela from "../../assets/tela2.svg"


export const Container = styled.div`
    background: url("${Tela}");
    background-size: cover;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

export const Image = styled.img`
    margin:30px 0;
    width: 307.96px;
    height: 99.47px;
`


export const H1 = styled.h1`    
        margin-bottom:26px;
        font-weight: 700;
        font-size: 34px;
        line-height: 40px;
        text-align: center;
        color: #FFFFFF;
`

export const InputLabel = styled.p`
        margin-top: 34px;
        font-weight: 700;
        font-size: 18px;
        line-height: 13px;
        letter-spacing: -0.408px;
        color: #EEEEEE;
        padding-left: 25px;
`

export const Input = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    padding-left: 25px;

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
`

export const Button = styled.button`
    margin-top: 80px;
    width: 342px;
    height: 74px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid white;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }

    &:active{
        opacity: .5;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;


    img{
        transform: rotate(180deg);
    }
`

export const Li = styled.li`
    width: 342px;
    height: 58px;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-top: 20px;

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;

    display: flex;
    justify-content:space-around;
    align-items: center;
    gap: 10px;
`