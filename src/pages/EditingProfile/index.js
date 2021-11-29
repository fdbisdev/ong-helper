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
    const location = useLocation();
    const history =  useHistory();

    const [name, setName] = useState(location.state.detail.name);
    const [password, setPassword] = useState(location.state.detail.password);
    const [email, setEmail] = useState(location.state.detail.email);
    const [whatsapp, setWhatsapp] = useState(location.state.detail.cellphone);
    const [userID, setUserID] = useState(location.state.detail.user_id);
    const [user, setUser] = useState('');


    async function handleOnEditingSubmit(){
        const paramsBody = {
            id: userID,
            email: email,
            name: name,
            password: password,
            cellphone: whatsapp,
        }
        
        try {
            await handleRegisterUser(paramsBody);
            alert('Perfil atualizada com sucesso!');

            history.push({
                pathname: '/dashboard',
                search: `?query=${user.access_token}`,
                state: { detail: user }
            });
        } catch (error) {
            alert('Não foi possível realizar o cadastro');
        }
    }

    const  handleChangeInputValue = useCallback(() => {
        const inputName = document.getElementById("nome");
        const inputEmail = document.getElementById("email");
        const inputWpp = document.getElementById("whatsapp");

        inputName.value = user.name;
        inputEmail.value = user.email;
        inputWpp.value = user.cellphone;
    }, [user]);

    useEffect(()=>{
        setUser(location.state.detail);
        setUserID(location.state.detail.user_id);
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