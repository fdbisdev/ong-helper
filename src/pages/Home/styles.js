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
`;

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  max-width: 70%;
`;

export const OngHelperSlogan = styled.h1`
  color: #E02041;
  font-size: 70px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 100px;
`;

export const FormWrapper = styled.div``;

export const FormTitle = styled.h1`
  font-size: 36px;
  font-family: 'Roboto', sans-serif;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 352px;
  justify-content: space-between;
`;

export const EmailInput = styled.input`
  height: 40px;
  font-size: 18px;
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
`;

export const RegisterButton = styled.button`
  flex-direction: row;
  display: flex;
  padding: 0px;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-top: 40px;
`;

export const RegisterTitle = styled.h1`
  margin-left: 16px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`;

export const LoginButton = styled.button`
  height: 60px;
  width: 352px;
  background-color: #E02041;
  color: #F0F0F5;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  margin-top: 40px;
`;

export const OngHelperImgage = styled.img`
  height: 578px;
  width: 640px; 
`;

export const RegisterImage = styled.img`

`;
