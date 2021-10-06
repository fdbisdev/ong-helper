import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import { useHistory } from "react-router-dom";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
    Container,
    ContainerTitle,
    LoadingWrapper,
} from './styles';
import Header from '../../components/Header';


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
                <Header user={user} handleLogOut={handleLogOut}/>
                <ContainerTitle>ONG's Cadastradas</ContainerTitle>
            </Container>
            )
        }
        </>
    );
}

export default Dashboard;