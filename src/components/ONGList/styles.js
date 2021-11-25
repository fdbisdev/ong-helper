import styled from 'styled-components';

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    margin: 0 20px;
    margin-left: 56px;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;