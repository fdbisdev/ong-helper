import styled from 'styled-components';

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin: 0 20px;
    margin-left: 56px;
    height: 100%;
    width: 90%;

    @media (max-width: 1700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        margin-left: 0px;
        display: flex;
        flex-direction: column;
    }
`;