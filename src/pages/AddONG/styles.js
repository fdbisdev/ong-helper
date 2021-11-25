import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const RegisterInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  box-shadow:  10px 10px 120px #DCDCE5;
  height: 70%;
  justify-content: space-evenly;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  max-width: 70%;
`;

export const LoadingWrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const RegisterInfo = styled.div`
  width: 380px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 560px;
`;

export const RegisterFormsWrapper = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-self: center;
  width: 470px;
  box-sizing: border-box;

  @media (max-width: 1300px) {
    width: 370px;
  }

  @media (max-width: 1100px) {
    width: 320px;
  }
`;

export const InfoTitle = styled.h1`
  font-size: 36px;
  font-family: 'Roboto', sans-serif;
`;

export const InfoDescription = styled.p`
  color: #737380;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`;

export const HomeBackWrapper = styled.div`
  height: 40px;
`;

export const HomeBackButton = styled.button`
  flex-direction: row;
  display: flex;
  padding: 0px;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-top: 164px;
  background-color: transparent;
  height: 40px;
`;

export const HomeBackImage = styled.img``;

export const HomeBackTitle = styled.h1`
  margin-left: 16px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`;

export const InputRegister = styled.input`
  height: 30px;
  margin-bottom: 12px;
  font-size: 18px;
  border-radius: 8px;
  padding: 8px 0 8px 8px;
  border: solid 1px #DCDCE5;
  ::placeholder{
    color: #DCDCE5;
  }
`;

export const HaveOngCheckbox = styled.div``;

export const OngLocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const OngCityInput = styled.input`
  height: 30px;
  margin-bottom: 12px;
  font-size: 18px;
  border-radius: 8px;
  padding: 8px 0 8px 8px;
  border: solid 1px #DCDCE5;
  ::placeholder{
    color: #DCDCE5;
  }
  width: 80%;
`;

export const OngStateInput = styled.input`
  height: 30px;
  margin-bottom: 12px;
  font-size: 18px;
  border-radius: 8px;
  padding: 8px 0 8px 8px;
  border: solid 1px #DCDCE5;
  ::placeholder{
    color: #DCDCE5;
  }
  width: 10%;
`;

export const RegisterButton = styled.button`
  height: 60px;
  background-color: #E02041;
  color: #F0F0F5;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  font-size: 18px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EditinginButtonText = styled.span``;