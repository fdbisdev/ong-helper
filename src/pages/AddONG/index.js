import React, { useState } from "react";
import { useHistory } from "react-router";

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
    OngLocationWrapper,
    OngCityInput,
    OngStateInput,
    RegisterButton,
    InputWrapper, 
} from "./styles";

import HomeBackLogo from '../../assets/backImage.png'

function AddONG() {
    const [ongName, setOngName] = useState('');
    const [ongWhatsapp, setOngWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

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

    function handleBackPress(){
        history.goBack();
    }

    return (
        <PageWrapper>
            <Container>
                <RegisterInfoWrapper>
                <RegisterInfo>
                        <InfoTitle>
                            Cadastrar ONG
                        </InfoTitle>
                        <InfoDescription>
                            Adicionar ou editar as informações da sua ONG. Mantenha suas informações de cadastro sempre atualizadas.
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
                                <InputRegister id="ongName" placeholder="Nome da ONG" onChange={event => setOngName(event.target.value)}/>
                                <InputRegister id="ongWhatsapp" placeholder="Whatsapp da ONG" onChange={event => setOngWhatsapp(event.target.value)}/>
                            </InputWrapper>
                           <OngLocationWrapper>
                                <OngCityInput placeholder="Cidade"/>
                                <OngStateInput placeholder="UF"/>
                            </OngLocationWrapper> 
                            <RegisterButton onClick={handleOnEditingSubmit}>Enviar</RegisterButton>
                        </RegisterFormsWrapper>
                </RegisterInfoWrapper>
            </Container>
        </PageWrapper>
    )
}

    
export default AddONG;
