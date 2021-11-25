import React, { useCallback, useEffect, useState } from "react";

import { useHistory, useLocation } from "react-router";

import { handleUpdateONG, hanldeCreateONG } from "../../services/api";

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
    EditinginButtonText,
} from "./styles";

import HomeBackLogo from '../../assets/backImage.png'
import Loader from "react-loader-spinner";

function AddONG() {
    const location = useLocation();
    const history =  useHistory();

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(location.state.ong[0].name);
    const [city, setCity] = useState(location.state.ong[0].city);
    const [state, setState] = useState(location.state.ong[0].state);
    const [whatsapp, setWhatsapp] = useState(location.state.ong[0].phone);

    const handleChangeInputValue = useCallback(async () => {
        const inputName = document.getElementById("ongName");
        const inputWpp = document.getElementById("ongWhatsapp");
        const inputCity = document.getElementById("ongCity");
        const inputState = document.getElementById("ongState");

        inputName.value = location.state.ong[0].name;
        inputState.value = location.state.ong[0].state;
        inputCity.value = location.state.ong[0].city;
        inputWpp.value = location.state.ong[0].phone;
    
    }, [location.state.ong]);

    async function handleOnEditingSubmit(){
        setLoading(true);

        const paramsBody = {
            name,
            city,
            state,
            phone: whatsapp,
        }

        if(location.state.ong.length > 0){
            try {
                await handleUpdateONG(user?.access_token, location.state.ong[0].ong_id, paramsBody);
                alert('ONG Atualizada com sucesso!');

                history.push({
                    pathname: '/dashboard',
                    search: `?query=${user.access_token}`,
                    state: { detail: user }
                });
                
            } catch (error) {
                alert('Não foi possível atualizar a ONG');
            }
        }
        else{
            try {
                await hanldeCreateONG(paramsBody, user?.access_token);
                alert('ONG Cadastrada com sucesso!');
    
                history.push({
                    pathname: '/dashboard',
                    search: `?query=${user.access_token}`,
                    state: { detail: user }
                });
            } catch (error) {
                alert('Não foi possível cadastrar a ONG');
            }
        }
        
        setLoading(false);
    }

    function handleBackPress(){
        history.goBack();
    }

    useEffect(()=>{
        if(location.state.ong.length > 0){
            handleChangeInputValue();
        }

        setUser(location.state.detail);
    },[handleChangeInputValue, location.state.detail, location.state.ong])

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
                            <InputRegister id="ongName" placeholder="Nome da ONG" onChange={event => setName(event.target.value)}/>
                            <InputRegister id="ongWhatsapp" placeholder="Whatsapp da ONG" onChange={event => setWhatsapp(event.target.value)}/>
                        </InputWrapper>
                    <OngLocationWrapper>
                            <OngCityInput id="ongCity" placeholder="Cidade" onChange={event => setCity(event.target.value)}/>
                            <OngStateInput id="ongState" placeholder="UF" onChange={event => setState(event.target.value)}/>
                        </OngLocationWrapper> 
                        <RegisterButton onClick={handleOnEditingSubmit}>
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
    )
}

    
export default AddONG;
