import React, { useEffect, useState } from 'react';

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
    InputDescription,
    RegisterButton,
    InputWrapper,
    EditinginButtonText,
} from "./styles";

import HomeBackLogo from '../../assets/backImage.png'
import Loader from "react-loader-spinner";
import { useHistory, useLocation } from 'react-router';
import { handleAddCases } from '../../services/api';

function AddCases (){
    const history =  useHistory();
    const location = useLocation();

    const [loading, setLoading] = useState(false);
    const [ong, setOng] = useState(location.state.ong);
    const [user, setUser] = useState(location.state.detail);
    const [caseTitle, setCaseTitle] = useState('');
    const [caseDescription, setCaseDescription] = useState('');
    const [caseActualPrice, setCaseActualPrice] = useState('');
    const [caseValue, setCaseValue] = useState('');

    async function handleAddNewCase(){
        setLoading(true);
        try {
            const paramsBody = {
                name: caseTitle,
                description: caseDescription,
                goal: Number(caseValue),
                current_money: Number(caseActualPrice),
                ong_id: ong.ong_id,
            };

            await handleAddCases(location.state.access_token, paramsBody);
            alert('Caso cadastrado com sucesso!');

            history.push({
                pathname: '/cases',
                state: { detail: user, ongName: ong, access_token: location.state.access_token }
            });
            
        } catch (error) {
            alert('Não foi possível cadastrar o caso');
        }

        setLoading(false);
    }

    useEffect(() => {
        setOng(location.state.ong);
        setUser(location.state.detail);
    },[location.state.detail, location.state.ong]);

    function handleBackPress(){
        history.goBack();
    }

    return (
        <PageWrapper>
        <Container>
            <RegisterInfoWrapper>
            <RegisterInfo>
                    <InfoTitle>
                        Cadastrar novo caso
                    </InfoTitle>
                    <InfoDescription>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </InfoDescription>
                    <HomeBackWrapper>

                    <HomeBackButton onClick={handleBackPress}>
                        <HomeBackImage src={HomeBackLogo}></HomeBackImage>
                        <HomeBackTitle>Voltar para os casos</HomeBackTitle>
                    </HomeBackButton>
                    
                    </HomeBackWrapper>
                </RegisterInfo>

                <RegisterFormsWrapper>
                    <InputWrapper>
                        <InputRegister id="title" placeholder="Título do caso" onChange={event => setCaseTitle(event.target.value)}/>
                        <InputDescription id="description" placeholder="Descrição" onChange={event => setCaseDescription(event.target.value)}/>
                        <InputRegister id="valorNow" placeholder="Valor arrecadado" onChange={event => setCaseActualPrice(event.target.value)}/>
                        <InputRegister id="valorMeta" placeholder="Valor da meta" onChange={event => setCaseValue(event.target.value)}/>
                        {/* <HaveOngCheckbox />
                        <InputRegister placeholder="Nome da ONG"/>
                        <InputRegister placeholder="Whatsapp da ONG"/> */}
                    </InputWrapper>
                        <RegisterButton onClick={handleAddNewCase}>
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
                            (
                            <EditinginButtonText>Enviar</EditinginButtonText>
                            )
                        }

                        </RegisterButton>
                    </RegisterFormsWrapper>
            </RegisterInfoWrapper>
        </Container>
    </PageWrapper>
    );
}

export default AddCases