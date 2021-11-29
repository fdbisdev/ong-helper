import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const OngHelperInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  max-width: 80%;

  @media (max-width: 1600px) {
    max-width: 85%; 
  }

  @media (max-width: 1500px) {
    max-width: 90%; 
  }

  @media (max-width: 1100px) {
    max-width: 95%; 
  }

  @media (max-width: 800px) {
    max-width: 95%; 
  }
`;

export const OngHelperSlogan = styled.h1`
  color: #E02041;
  font-size: 70px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 100px;

  @media (max-width: 440px) {
    font-size: 60px;
  }
`;

export const FormWrapper = styled.div``;

export const FormTitle = styled.h1`
  font-size: 36px;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 440px) {
    font-size: 24px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  justify-content: space-between;

  @media (max-width: 440px) {
    width: 320px;
  }
`;

export const EmailInput = styled.input`
  height: 40px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  border-radius: 8px;
  padding: 8px;
  border: solid 1px #DCDCE5;
  ::placeholder{
    color: #DCDCE5;
  }
`;

export const PasswordInput = styled.input`
  margin-top: 20px;
  height: 40px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  border-radius: 8px;
  padding: 8px;
  border: solid 1px #DCDCE5;
  ::placeholder{
    color: #DCDCE5;
  }
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 204px;
`;

export const RegisterButton = styled.button`
  flex-direction: row;
  display: flex;
  padding: 0px;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-top: 40px;
  background-color: transparent;
`;

export const RegisterTitle = styled.h1`
  margin-left: 16px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`;

export const LoginButton = styled.button`
  height: 60px;
  width: 420px;
  background-color: #E02041;
  color: #F0F0F5;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  margin-top: 40px;

  @media (max-width: 440px) {
    width: 320px;
  }
`;

export const OngHelperImgage = styled.img`
  height: 578px;
  width: 640px; 
  
  @media (max-width: 1240px) {
    height: 478px;
    width: 540px; 
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const RegisterImage = styled.img`

`;

export const LoginButtonText = styled.span``;
