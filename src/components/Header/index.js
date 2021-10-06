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

function Header({ user, handleLogOut }){
    return (
        <HeaderWrapper>
            <WelcomeProfileWrapper>
                <OngHelperSlogan>ONG HELPER</OngHelperSlogan>
                <WelcomeProfile>Bem vindo(a), {user.name}</WelcomeProfile>
                <GoToProfileButton><RightArrowBlack src={RightArrow}/></GoToProfileButton>
            </WelcomeProfileWrapper>
            <LogOutWrapper>
                <RegisterONGButton>Cadastrar ONG</RegisterONGButton>
                <LogOutButton onClick={handleLogOut}><PowerImage src={LogOutPowerButton}/></LogOutButton>
            </LogOutWrapper>
        </HeaderWrapper>
    );
}

export default Header;