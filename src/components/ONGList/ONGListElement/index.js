import React from 'react';
import { useHistory } from 'react-router';

import {
    Container,
    ONGName,
    ONGButtonNavigation,
} from './styles';

function ONGListElement({ ongName, user }){

    const history =  useHistory();

    function handleClickCard(){
        history.push({
            pathname: '/cases',
            state: { detail: user, ongName: ongName }
          });
    }

    return (
    <Container>
        <ONGButtonNavigation onClick={handleClickCard}>
            <ONGName>{ongName}</ONGName>
        </ONGButtonNavigation>
    </Container>
    );
}

export default ONGListElement;