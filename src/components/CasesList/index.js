import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import CasesListElement from './CasesListElement';
import { LoadingWrapper } from './CasesListElement/styles';

import {
    Container
} from './styles';

function CasesList({ ongCasesList }){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [ongCasesList]);

    if(ongCasesList.length === 0){
        return (
            <Container>
                <h4>Não há casos cadastrados</h4>
            </Container>
        );
    }

    return (
        <>
        {loading ?
        (
            <LoadingWrapper>
                <Loader
                    type="Oval"
                    color="#FF0404"
                    height={100}
                    width={100}
                />
            </LoadingWrapper>
        )
        :
        (
        <Container>
            {ongCasesList.map((currentCase) => 
            <CasesListElement currentCase={currentCase}/>
            )}
        </Container>
        )}
        </>
    );
}

export default CasesList;