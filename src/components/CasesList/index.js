import React from 'react';
import CasesListElement from './CasesListElement';

import {
    Container
} from './styles';

function CasesList({ ongCasesList }){
    return (
        <Container>
            {ongCasesList.map((currentCase) => 
                <CasesListElement caseName={currentCase}/>
            )}
        </Container>
    );
}

export default CasesList;