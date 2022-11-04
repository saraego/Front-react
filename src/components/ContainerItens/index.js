import React from "react";

import {ContainerItens} from "./styles"

function ContainerI(props, isBlur){
    return <ContainerItens isBlur={isBlur}>{props.children}</ContainerItens>
}

export default ContainerI