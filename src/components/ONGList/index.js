import React from 'react';
import ONGListElement from './ONGListElement';

import {
    Container
} from './styles';

function ONGList({ ongArrayList, user }){
    return (
        <Container>
            {ongArrayList.map((currentONG) => 
                <ONGListElement user={user} ongName={currentONG}/>
            )}
        </Container>
    );
}

export default ONGList;