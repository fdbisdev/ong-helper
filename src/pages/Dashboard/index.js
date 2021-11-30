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
import { handleGetUserInfo, hanldeGetAllONG, hanldeGetONG } from '../../services/api';

function Dashboard(){
    const location = useLocation();
    const history =  useHistory();

    const [user, setUser] = useState('');
    const [allOngs, setAllOngs] = useState([]);
    const [ong, setONG] = useState('');	
    const [loading, setLoading] = useState(true);
    const [acessToken, setAcessToken] = useState(location.state.access_token ? location.state.access_token : location.state.detail.access_token);

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
                const ongResponse = await hanldeGetONG(acessToken);
                setONG(ongResponse);
            } catch (error) {
                alert('Erro ao carregar as informações da ONG!');
            }
        
            setLoading(false);
        };

        if(location.state.access_token){
            setAcessToken(location.state.access_token);
        }

        const getAllUserInfo = async () => {
            try {
                const userResponse = await handleGetUserInfo(acessToken);
                setUser(userResponse.user.UserModel);
            }
            catch (error) {
                alert('Erro ao carregar as informações do usuário!');
            }
        };
        
        getAllONG();
        getAllUserInfo();
        getUserONG();

        
    },[acessToken, location.state.access_token, location.state.detail])

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
                <Header acessToken={acessToken} ong={ong.ong} user={user} handleLogOut={handleLogOut}/>
                <ContainerTitle>ONG's Cadastradas</ContainerTitle>
                <ONGList acessToken={acessToken} ongArrayList={allOngs} user={user}/>
            </Container>
            )}
        </>
    );
}

export default Dashboard;