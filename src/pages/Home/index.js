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
import { Link } from "react-router-dom";

function Home() {
  return (
    <PageWrapper>
      <Container>
        <OngHelperInfo>
          <OngHelperSlogan>ONG HELPER</OngHelperSlogan>
          <FormWrapper>
            <FormTitle>Entre com sua conta</FormTitle>
            <InputWrapper>
              <EmailInput placeholder="Email"></EmailInput>
              <PasswordInput placeholder="Senha"></PasswordInput>
            </InputWrapper>
            <RegisterWrapper>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <RegisterButton>
                  <RegisterImage src={RegisterLogo}></RegisterImage>
                  <RegisterTitle>Não tenho cadastro</RegisterTitle>
                </RegisterButton>
              </Link>
            </RegisterWrapper>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <LoginButton>Entrar</LoginButton>
            </Link>
          </FormWrapper>
        </OngHelperInfo>
        <OngHelperImgage src={HomeLogo}/>
      </Container>
    </PageWrapper>
  );
}

export default Home;
