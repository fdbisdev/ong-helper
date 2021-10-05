import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import { useHistory } from "react-router-dom";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import {
    Container,
    Header,
    OngHelperSlogan,
    WelcomeProfile,
    RegisterONGButton,
    LogOutButton,
    WelcomeProfileWrapper,
    RightArrowBlack,
    LogOutWrapper,
    PowerImage,
    GoToProfileButton,
    ContainerTitle,
    LoadingWrapper,
} from './styles';

import RightArrow from '../../assets/arrowrightblack.png'
import LogOutPowerButton from '../../assets/power.png'

function Dashboard(){
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const history =  useHistory();

    function handleLogOut(){
        history.goBack();
    }

    useEffect(()=>{
        setUser(location.state.detail);
        
        setLoading(false);
    },[location.state.detail])

    return (
        <>
        {
            loading ?
            (
            <LoadingWrapper>
                <Loader
                    type="Oval"
                    color="#FF0404"
                    height={100}
                    width={100}
                />
            </LoadingWrapper>
            )
            :
            (
            <Container>
                <Header>
                    <WelcomeProfileWrapper>
                        <OngHelperSlogan>ONG HELPER</OngHelperSlogan>
                        <WelcomeProfile>Bem vindo(a), {user.name}</WelcomeProfile>
                        <GoToProfileButton><RightArrowBlack src={RightArrow}/></GoToProfileButton>
                    </WelcomeProfileWrapper>
                    <LogOutWrapper>
                        <RegisterONGButton>Cadastrar ONG</RegisterONGButton>
                        <LogOutButton onClick={handleLogOut}><PowerImage src={LogOutPowerButton}/></LogOutButton>
                    </LogOutWrapper>
                </Header>
                <ContainerTitle>ONG's Cadastradas</ContainerTitle>
            </Container>
            )
        }
        </>
    );
}

export default Dashboard;