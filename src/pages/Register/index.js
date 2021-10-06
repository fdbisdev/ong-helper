import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { handleRegisterUser } from '../../services/api'

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
    // HaveOngCheckbox,
    // OngLocationWrapper,
    // OngCityInput,
    // OngStateInput,
    RegisterButton,
    InputWrapper,
} from './styles';

import HomeBackLogo from '../../assets/backImage.png'

function Register(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');       

    const history =  useHistory();

    async function handleOnSubmit(){
        const paramsBody = {
            email: email,
            name: name,
            password: password,
            cellphone: whatsapp,
        }
        
        try {
            await handleRegisterUser(paramsBody);
            history.push('/')
        } catch (error) {
            alert('Não foi possível realizar o cadastro');
        }
    }

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
                            <InputRegister placeholder="Nome" onChange={event => setName(event.target.value)}/>
                            <InputRegister type="password" placeholder="Senha" onChange={event => setPassword(event.target.value)}/>
                            <InputRegister type="email" placeholder="Email" onChange={event => setEmail(event.target.value)}/>
                            <InputRegister placeholder="Whatsapp" onChange={event => setWhatsapp(event.target.value)}/>
                            {/* <HaveOngCheckbox />
                            <InputRegister placeholder="Nome da ONG"/>
                            <InputRegister placeholder="Whatsapp da ONG"/> */}
                        </InputWrapper>
                        {/* <OngLocationWrapper>
                            <OngCityInput placeholder="Cidade"/>
                            <OngStateInput placeholder="UF"/>
                        </OngLocationWrapper> */}
                        <RegisterButton onClick={handleOnSubmit}>Cadastrar</RegisterButton>
                    </RegisterFormsWrapper>
                </RegisterInfoWrapper>
            </Container>
        </PageWrapper>
    );
}

export default Register;