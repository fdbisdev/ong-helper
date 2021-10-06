import React from 'react';
import ONGListElement from './ONGListElement';

import {
    Container
} from './styles';

function ONGList({ ongArrayList }){
    return (
        <Container>
            {ongArrayList.map((currentONG) => 
                <ONGListElement ongName={currentONG}/>
            )}
        </Container>
    );
}

export default ONGList;