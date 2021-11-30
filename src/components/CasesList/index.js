import React from 'react';
import CasesListElement from './CasesListElement';

import {
    Container
} from './styles';

function CasesList({ ongCasesList }){

    if(ongCasesList.length === 0){
        return (
            <Container>
                <h4>Não há casos cadastrados</h4>
            </Container>
        );
    }

    return (
        <Container>
            {ongCasesList.map((currentCase) => 
                <CasesListElement currentCase={currentCase}/>
            )}
        </Container>
    );
}

export default CasesList;