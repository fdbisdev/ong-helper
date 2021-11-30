import styled from 'styled-components';

export const LoadingWrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Container = styled.li`
    background-color: #FFFFFF;
    align-items: flex-start;
    justify-content: center;
    display: flex;
    box-sizing: border-box;
    padding: 14px;
    border: none;
    height: 314px;
    border-radius: 10px;
    flex-direction: row;
    cursor: pointer;
    margin-top: 56px;
    flex-direction: column;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
    transition: 0.5s ease-in-out;

    :hover{
        box-shadow: 0px 2.5px 10px 5px rgba(0, 0, 0, 0.15);
    }
`;

export const CaseNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const CaseTitle = styled.p`
    color: #13131A;
    font-size: 14px;
    font-weight: bold;
`;

export const CasesName = styled.p`
    font-size: 14px;
`;

export const CaseDescriptionWrapper = styled.div``;

export const CasePriceWrapper = styled.div``;


export const CaseAmountWrapper = styled.div`
    flex: 1;
    width: 314px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TrashIcon = styled.img`
    transition: 0.5s ease-in-out;

    :hover{
        width: 32px;
        height: 32px;
    }
`;

export const ActionButtonsWrapper = styled.div`
    margin-top: -45px;
    display: flex;
    justify-content: center;
`;

export const GoToDelete = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
`;

export const GoToEdit = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    
`;

export const FirstWrapper = styled.div`
    width: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;