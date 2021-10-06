import React from 'react';

import {
    Container,
    ONGName,
} from './styles';

function ONGListElement({ ongName }){
    return (
        <Container>
            <ONGName>{ongName}</ONGName>
        </Container>
    );
}

export default ONGListElement;