import React from 'react';
import { useHistory } from 'react-router';

import {
    Container,
    ONGName,
    ONGButtonNavigation,
} from './styles';

function ONGListElement({ ongName, user, acessToken }){

    const history =  useHistory();

    function handleClickCard(){
        history.push({
            pathname: '/cases',
            state: { detail: user, ongName: ongName, access_token: acessToken }
          });
    }

    return (
    <Container>
        <ONGButtonNavigation onClick={handleClickCard}>
            <ONGName>{ongName.name}</ONGName>
        </ONGButtonNavigation>
    </Container>
    );
}

export default ONGListElement;