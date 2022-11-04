import React from "react";

import {Container} from "./styles"

function ContainerP(props, isUsers){
    return <Container isUsers={isUsers}>{props.children}</Container>
}

export default ContainerP