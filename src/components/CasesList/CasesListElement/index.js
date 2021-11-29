import React from 'react';

import {
    Container,
    CasesName,
    CaseNameWrapper,
    CaseDescriptionWrapper,
    CasePriceWrapper,
    CaseAmountWrapper,
    ActionButtonsWrapper,
    FirstWrapper,
    GoToDelete,
    GoToEdit,
    TrashIcon,
    CaseTitle
} from './styles';

import TrashIconImage from '../../../assets/Apagar.png';
import EditIconImage from '../../../assets/edit.png';


function CasesListElement({ caseName }){

    return (
    <Container>
        <FirstWrapper>
            <CaseNameWrapper>
                <CaseTitle>CASO:</CaseTitle>
                <CasesName>{caseName}</CasesName>
            </CaseNameWrapper>
            
            <ActionButtonsWrapper>
                <GoToDelete onClick={() => console.log('Delete')}>
                    <TrashIcon src={TrashIconImage}/>
                </GoToDelete>

                <GoToEdit onClick={() => console.log('Edit')}>
                    <TrashIcon src={EditIconImage}/>
                </GoToEdit>
            </ActionButtonsWrapper>
        </FirstWrapper>

        <CaseDescriptionWrapper>
            <CaseTitle>DESCRIÇÃO:</CaseTitle>
            <CasesName>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</CasesName>

        </CaseDescriptionWrapper>

        <CasePriceWrapper>
            <CaseTitle>VALOR:</CaseTitle>
            <CaseAmountWrapper>
                <CasesName>R$ 20,00 </CasesName> <CasesName>/</CasesName> <CasesName>R$ 120,00</CasesName>
            </CaseAmountWrapper>
        </CasePriceWrapper>
    </Container>
    );
}

export default CasesListElement;