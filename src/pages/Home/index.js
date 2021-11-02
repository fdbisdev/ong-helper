import React, { useState } from "react";

import { handleLogin } from '../../services/api';

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
  LoginButtonText,
} from "./styles.js";

import HomeLogo from '../../assets/homeLogo.png';
import RegisterLogo from '../../assets/VoltarregisterIcon.png';

import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

function Home() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const history =  useHistory();

  async function handleOnSubmit(){ 
    setLoading(true);
      const paramsBody = {
          email: email,
          password: password,
      }
      
      try {
        const response = await handleLogin(paramsBody);
        history.push({
          pathname: '/dashboard',
          search: `?query=${response.data.access_token}`,
          state: { detail: response.data }
        });
        
      } catch (error) {
         alert('Não foi possível realizar login');
      }
    setLoading(false);
  }

  function checkSubmit(e) {
    if(e && e.key === "Enter") {
      handleOnSubmit();
    }
  }

  return (
    <PageWrapper>
      <Container>
        <OngHelperInfo>
          <OngHelperSlogan>ONG HELPER</OngHelperSlogan>
          <FormWrapper>
            <FormTitle>Entre com sua conta</FormTitle>
            <InputWrapper>
              <EmailInput placeholder="Email" onChange={event => setEmail(event.target.value)}></EmailInput>
              <PasswordInput onKeyPress={(event) => checkSubmit(event)} type="password" placeholder="Senha" onChange={event => setPassword(event.target.value)}></PasswordInput>
            </InputWrapper>
            <RegisterWrapper >
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <RegisterButton>
                  <RegisterImage src={RegisterLogo}></RegisterImage>
                  <RegisterTitle>Não tenho cadastro</RegisterTitle>
                </RegisterButton>
              </Link>
            </RegisterWrapper>
            <LoginButton type="submit" onClick={handleOnSubmit}>
              { 
                loading ? (
                  <Loader
                    type="Oval"
                    color="#FFF"
                    height={20}
                    width={20}
                  />
                )
                :
                (<LoginButtonText>Entrar</LoginButtonText>)
              }
            </LoginButton>
          </FormWrapper>
        </OngHelperInfo>
        <OngHelperImgage src={HomeLogo}/>
      </Container>
    </PageWrapper>
  );
}

export default Home;
