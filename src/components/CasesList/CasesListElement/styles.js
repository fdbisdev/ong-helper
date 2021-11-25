import styled from 'styled-components';

export const Container = styled.li`
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    display: flex;
    box-sizing: border-box;
    border: none;
    height: 314px;
    border-radius: 10px;
    flex-direction: row;
    cursor: pointer;
    margin-top: 56px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
    transition: 0.5s ease-in-out;

    :hover{
        box-shadow: 0px 2.5px 10px 5px rgba(0, 0, 0, 0.15);
    }
`;

export const CasesName = styled.h1`
   font-size: 30px;
   color: #13131A;
`;
