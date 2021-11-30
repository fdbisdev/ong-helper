import React from 'react';
import ONGListElement from './ONGListElement';

import {
    Container
} from './styles';

function ONGList({ ongArrayList, user, acessToken }){
    return (
        <Container>
            {ongArrayList.map((currentONG) => 
                <ONGListElement acessToken={acessToken} user={user} ongName={currentONG}/>
            )}
        </Container>
    );
}

export default ONGList;