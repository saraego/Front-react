import styled from "styled-components";
import Tela from "../../assets/tela.svg"


export const Container = styled.div`
    background: url("${Tela}");
    background-size: cover;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

export const Image = styled.img`
    margin-top: 15px;
`

export const ContainerItens = styled.div`
    padding: 36px 50px;
    border-radius: 64px 64px 0px 0px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);

    display: flex;
    flex-direction: column;

    
    height: 80.9vh;
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
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: 0;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`