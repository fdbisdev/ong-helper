import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import Header from '../../components/Header';

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import LeftArrow from '../../assets/arrowleftblack.png';

import {
    Container,
    ContainerTitle,
    LoadingWrapper,
    GoToDashboard,
    LeftArrowBlack,
    CasesTitleWrapper,
} from './styles';
import CasesList from '../../components/CasesList';

function Cases(){
    const [user, setUser] = useState('');
    const [ongName, setOngName] = useState('');
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const history =  useHistory();

    const mockedOngCasesList = ['Cadelinha atropelada', 'Doação de alimentos', 
    'Arrecadação de roupas', 'Compra de ração para cachorrinhos']

    function handleLogOut(){
        history.goBack();
    }

    function handleGoToDashboard(){
        history.goBack();
    }

    useEffect(()=>{
        setUser(location.state.detail);
        setOngName(location.state.ongName);
        setLoading(false);
    },[location.state.detail, location.state.ongName])

    
    return (
        <>
        { loading ?
            (
            <LoadingWrapper>
                <Loader
                    type="Oval"
                    color="#FF0404"
                    height={100}
                    width={100}
                />
            </LoadingWrapper>
            ) : (
            <Container>
                <Header ong={ongName} user={user} handleLogOut={handleLogOut}/>
                <CasesTitleWrapper>
                    <GoToDashboard onClick={handleGoToDashboard}>
                        <LeftArrowBlack src={LeftArrow}/>
                    </GoToDashboard>
                    <ContainerTitle>Casos cadastrados para {ongName.name}</ContainerTitle>
                </CasesTitleWrapper>
                <CasesList ongCasesList={mockedOngCasesList}/>
            </Container>
            )}
            </>
    );
}

export default Cases;