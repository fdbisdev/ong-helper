import React from 'react';

import {
    Container,
    CasesName,
} from './styles';

function CasesListElement({ caseName }){

    return (
    <Container>
        <CasesName>{caseName}</CasesName>
    </Container>
    );
}

export default CasesListElement;