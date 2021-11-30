import React from 'react';

import {
    HeaderWrapper,
    OngHelperSlogan,
    WelcomeProfile,
    RegisterONGButton,
    LogOutButton,
    WelcomeProfileWrapper,
    RightArrowBlack,
    LogOutWrapper,
    PowerImage,
    GoToProfileButton,
} from './styles';

import RightArrow from '../../assets/arrowrightblack.png'
import LogOutPowerButton from '../../assets/power.png'

import { useHistory } from 'react-router';

function CasesHeader({ user, handleLogOut, ong, acessToken }){
    const history =  useHistory();

    function handleClickAddCases(){
        history.push({
            pathname: '/addCases',
            state: { detail: user, ong: ong, access_token: acessToken }
          });
    }

    async function gotoProfileEdit(){
        history.push({
            pathname: '/editingProfile',
            search: `?query=${acessToken}`,
            
            state: { detail: user, access_token: acessToken }
        });
    }

    return (
        <HeaderWrapper>
            <WelcomeProfileWrapper>
                <OngHelperSlogan>ONG HELPER</OngHelperSlogan>
                <WelcomeProfile>Bem vindo(a), {user.name}</WelcomeProfile>
                
                <GoToProfileButton onClick={gotoProfileEdit}>
                    <RightArrowBlack src={RightArrow}/>
                </GoToProfileButton>
                
            </WelcomeProfileWrapper>
            <LogOutWrapper>
                <RegisterONGButton onClick={handleClickAddCases}>Cadastrar novo caso</RegisterONGButton>
                <LogOutButton onClick={handleLogOut}><PowerImage src={LogOutPowerButton}/></LogOutButton>
            </LogOutWrapper>
        </HeaderWrapper>
    );
}

export default CasesHeader;