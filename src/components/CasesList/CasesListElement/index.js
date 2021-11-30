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

function CasesListElement({ currentCase }){

    async function handleDeleteCases(){

    }

    return (
    <Container>
        <FirstWrapper>
            <CaseNameWrapper>
                <CaseTitle>CASO:</CaseTitle>
                <CasesName>{currentCase.name}</CasesName>
            </CaseNameWrapper>
            
            <ActionButtonsWrapper>
                <GoToDelete onClick={handleDeleteCases}>
                    <TrashIcon src={TrashIconImage}/>
                </GoToDelete>

                <GoToEdit onClick={() => console.log('Edit')}>
                    <TrashIcon src={EditIconImage}/>
                </GoToEdit>
            </ActionButtonsWrapper>
        </FirstWrapper>

        <CaseDescriptionWrapper>
            <CaseTitle>DESCRIÇÃO:</CaseTitle>
            <CasesName>{currentCase.description}</CasesName>

        </CaseDescriptionWrapper>

        <CasePriceWrapper>
            <CaseTitle>VALOR:</CaseTitle>
            <CaseAmountWrapper>
                <CasesName>R$ {currentCase.current_money} </CasesName> <CasesName>/</CasesName> <CasesName>R$ {currentCase.goal}</CasesName>
            </CaseAmountWrapper>
        </CasePriceWrapper>
    </Container>
    );
}

export default CasesListElement;