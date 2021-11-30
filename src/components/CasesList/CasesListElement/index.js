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
    CaseTitle,
} from './styles';

import TrashIconImage from '../../../assets/Apagar.png';
import EditIconImage from '../../../assets/edit.png';

import { useHistory, useLocation } from 'react-router';

import { handleDeleteCase } from '../../../services/api';

function CasesListElement({ currentCase }){
    const location = useLocation();
    const history = useHistory();

    const { case_id } = currentCase;

    async function handleDeleteCases(){

        try {  
            await handleDeleteCase(case_id, location.state.access_token);
            alert('Caso deletado com sucesso!');
            
        } catch (error) {
            console.log(error);
            alert('Não foi possível deletar o caso.');
        }

    }

    async function handleEditCases(){
        history.push({
            pathname: '/addCases',
            state: { case: currentCase, detail: location.state.detail, ong: location.state.ongName, access_token: location.state.access_token }
        });
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

                    <GoToEdit onClick={handleEditCases}>
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