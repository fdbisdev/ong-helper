import React from "react";

import {
  Container,
  OngHelperInfo,
  PageWrapper,
  FormWrapper,
  InputWrapper,
  FormTitle,
  EmailInput,
  PasswordInput,
  RegisterWrapper,
  RegisterButton,
  RegisterTitle,
  LoginButton,
  OngHelperImgage,
  OngHelperSlogan,
  RegisterImage,
} from "./styles.js";

import HomeLogo from '../../assets/homeLogo.png';
import RegisterLogo from '../../assets/VoltarregisterIcon.png';

function App() {
  return (
    <PageWrapper>
      <Container>
        <OngHelperInfo>
          <OngHelperSlogan>ONG Helper</OngHelperSlogan>
          <FormWrapper>
            <FormTitle>Entre com sua conta</FormTitle>
            <InputWrapper>
              <EmailInput placeholder="Email"></EmailInput>
              <PasswordInput placeholder="Senha"></PasswordInput>
            </InputWrapper>
            <RegisterWrapper>
              <RegisterButton>
                <RegisterImage src={RegisterLogo}></RegisterImage>
                <RegisterTitle>Não tenho cadastro</RegisterTitle>
              </RegisterButton>
            </RegisterWrapper>
            <LoginButton>Entrar</LoginButton>
          </FormWrapper>
        </OngHelperInfo>
        <OngHelperImgage src={HomeLogo}/>
      </Container>
    </PageWrapper>
  );
}

export default App;
