import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import { useHistory } from "react-router-dom";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Header from '../../components/Header';
import ONGList from '../../components/ONGList';

import {
    Container,
    ContainerTitle,
    LoadingWrapper,
} from './styles';
import { hanldeGetAllONG, hanldeGetONG } from '../../services/api';

function Dashboard(){
    const [user, setUser] = useState('');
    const [allOngs, setAllOngs] = useState([]);
    const [ong, setONG] = useState('');	
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const history =  useHistory();

    function handleLogOut(){
        history.push('/');
    }

    useEffect(()=>{
        setUser(location.state.detail);
        const getAllONG = async () => {
            try {
                const response = await hanldeGetAllONG();
                setAllOngs(response.ong);
            } catch (error) {
                alert('Erro ao carregar as informações da ONG!');
            }
        };
        const getUserONG = async () => {
            try {
                const ongResponse = await hanldeGetONG(location.state.detail.access_token);
                setONG(ongResponse);
            } catch (error) {
                alert('Erro ao carregar as informações da ONG!');
            }
        
            setLoading(false);
        };
        
        getAllONG();
        getUserONG();
    },[location.state.detail, user?.access_token])

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
                <Header ong={ong.ong} user={user} handleLogOut={handleLogOut}/>
                <ContainerTitle>ONG's Cadastradas</ContainerTitle>
                <ONGList ongArrayList={allOngs} user={user}/>
            </Container>
            )}
        </>
    );
}

export default Dashboard;