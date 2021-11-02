import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

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

function EditingProfile(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [user, setUser] = useState('');

    const location = useLocation();
    const history =  useHistory();

    async function handleOnEditingSubmit(){
        // const paramsBody = {
        //     email: email,
        //     name: name,
        //     password: password,
        //     cellphone: whatsapp,
        // }
        
        try {
            // await handleRegisterUser(paramsBody);
            history.push('/')
        } catch (error) {
            alert('Não foi possível realizar o cadastro');
        }
    }

    const  handleChangeInputValue = useCallback(() => {
        const inputName = document.getElementById("nome");
        const inputPassword = document.getElementById("password");
        const inputEmail = document.getElementById("email");
        const inputWpp = document.getElementById("whatsapp");

        inputName.value = user.name;
        inputPassword.value = user.password;
        inputEmail.value = user.email;
        inputWpp.value = user.cellphone;
    }, [user]);

    useEffect(()=>{
        setUser(location.state.detail);
        handleChangeInputValue();
    },[handleChangeInputValue, location.state.detail])


    function handleBackPress(){
        history.goBack();
    }

    return (
        <PageWrapper>
            <Container>
                <RegisterInfoWrapper>
                    <RegisterInfo>
                        <InfoTitle>
                            Editar perfil
                        </InfoTitle>
                        <InfoDescription>
                            Edite seu perfil para manter suas informações de cadastro sempre atualizadas.
                        </InfoDescription>
                        <HomeBackWrapper>
    
                        <HomeBackButton onClick={handleBackPress}>
                            <HomeBackImage src={HomeBackLogo}></HomeBackImage>
                            <HomeBackTitle>Voltar para Dashboard</HomeBackTitle>
                        </HomeBackButton>
                           
                        </HomeBackWrapper>
                    </RegisterInfo>
                        
                        <RegisterFormsWrapper>
                            <InputWrapper>
                                <InputRegister id="nome" placeholder="Nome" onChange={event => setName(event.target.value)}/>
                                <InputRegister id="password" type="password" placeholder="Senha" onChange={event => setPassword(event.target.value)}/>
                                <InputRegister id="email" type="email" placeholder="Email" onChange={event => setEmail(event.target.value)}/>
                                <InputRegister id="whatsapp" placeholder="whatsapp" onChange={event => setWhatsapp(event.target.value)}/>
                                {/* <HaveOngCheckbox />
                                <InputRegister placeholder="Nome da ONG"/>
                                <InputRegister placeholder="Whatsapp da ONG"/> */}
                            </InputWrapper>
                            {/* <OngLocationWrapper>
                                <OngCityInput placeholder="Cidade"/>
                                <OngStateInput placeholder="UF"/>
                            </OngLocationWrapper> */}
                            <RegisterButton onClick={handleOnEditingSubmit}>Enviar</RegisterButton>
                        </RegisterFormsWrapper>
                        
                </RegisterInfoWrapper>
            </Container>
        </PageWrapper>
    );
}

export default EditingProfile;