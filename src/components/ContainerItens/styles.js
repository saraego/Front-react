import styled from "styled-components";

export const ContainerItens = styled.div`
    padding: 36px 50px;
    border-radius: 64px 64px 0px 0px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);

    display: flex;
    flex-direction: column;
    
    height: 80.9vh;

    ${drops => drops.isBlur && `backdrop-filter: blur(45px);
        min-height: calc(100vh - 160px);`}
`