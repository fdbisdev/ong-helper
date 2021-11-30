import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

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
import { handleGetCasesInfo } from '../../services/api';
import CasesHeader from '../../components/CasesHeader';

function Cases(){
    const location = useLocation();
    const history =  useHistory();

    const [user, setUser] = useState(location.state.detail);
    const [ongName, setOngName] = useState(location.state.ongName);
    const [loading, setLoading] = useState(true);
    const [caseInfo, setCaseInfo] = useState([]);

    useEffect(() => {
        async function handleGetCases(){
            try {
                const responseInfoCases = await handleGetCasesInfo(location.state.access_token, ongName.ong_id);
                setCaseInfo(responseInfoCases.ong);

            } catch (error) {
                alert('Erro ao carregar casos');
            }
        }
        handleGetCases();
    }, [caseInfo, location.state.access_token, ongName.id, ongName.ong_id]);

    function handleLogOut(){
        history.push('/');
    }

    function handleGoToDashboard(){
        history.goBack();
    }

    useEffect(()=>{
        setUser(location.state.detail);
        setOngName(location.state.ongName);
        setLoading(false);
    },[location.state.acessToken, location.state.detail, location.state.ongName])

    
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
                <CasesHeader acessToken={location.state.access_token} ong={ongName} user={user} handleLogOut={handleLogOut}/>
                <CasesTitleWrapper>
                    <GoToDashboard onClick={handleGoToDashboard}>
                        <LeftArrowBlack src={LeftArrow}/>
                    </GoToDashboard>
                    <ContainerTitle>Casos cadastrados para {ongName.name}</ContainerTitle>
                </CasesTitleWrapper>
                <CasesList ongCasesList={caseInfo}/>
            </Container>
            )}
        </>
    );
}

export default Cases;