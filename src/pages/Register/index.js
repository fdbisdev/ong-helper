import React from 'react';
import { Link } from 'react-router-dom';

import {
    PageWrapper,
    Container,
    RegisterInfoWrapper,
    RegisterInfo,
    RegisterFormsWrapper,
    InfoTitle,
    InfoDescription,
    HomeBackWrapper,
    HomeBackButton,
    HomeBackImage,
    HomeBackTitle,
    InputRegister,
    HaveOngCheckbox,
    OngLocationWrapper,
    OngCityInput,
    OngStateInput,
    RegisterButton,
    InputWrapper,
} from './styles';

import HomeBackLogo from '../../assets/backImage.png'

function Register(){
    return (
        <PageWrapper>
            <Container>
                <RegisterInfoWrapper>
                    <RegisterInfo>
                        <InfoTitle>
                            Cadastro
                        </InfoTitle>
                        <InfoDescription>
                            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                        </InfoDescription>
                        <HomeBackWrapper>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <HomeBackButton>
                                    <HomeBackImage src={HomeBackLogo}></HomeBackImage>
                                    <HomeBackTitle>Voltar para logon</HomeBackTitle>
                                </HomeBackButton>
                            </Link>
                        </HomeBackWrapper>
                    </RegisterInfo>
                    <RegisterFormsWrapper>
                        <InputWrapper>
                            <InputRegister placeholder="Nome"/>
                            <InputRegister placeholder="Senha"/>
                            <InputRegister placeholder="Email"/>
                            <InputRegister placeholder="Whatsapp"/>
                            <HaveOngCheckbox />
                            <InputRegister placeholder="Nome da ONG"/>
                            <InputRegister placeholder="Whatsapp da ONG"/>
                        </InputWrapper>
                        <OngLocationWrapper>
                            <OngCityInput placeholder="Cidade"/>
                            <OngStateInput placeholder="UF"/>
                        </OngLocationWrapper>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <RegisterButton>Cadastrar</RegisterButton>
                        </Link>
                    </RegisterFormsWrapper>
                </RegisterInfoWrapper>
            </Container>
        </PageWrapper>
    );
}

export default Register;