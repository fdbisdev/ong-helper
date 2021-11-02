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



function Header({ user, handleLogOut }){

    const history =  useHistory();

    async function gotoProfileEdit(){
        // const paramsBody = {
        //     email: user.email,
        //     name: user.name,
        //     password: user.password,
        //     cellphone: user.whatsapp,
        // }
        
        // try {
          //const response = await handleLogin(paramsBody);
          history.push({
            pathname: '/editingProfile',
            search: `?query=${user.access_token}`,
            state: { detail: user }
          });
          
        // } catch (error) {
        //    alert('Não foi possível realizar login');
        // }   
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
                <RegisterONGButton>Cadastrar ONG</RegisterONGButton>
                <LogOutButton onClick={handleLogOut}><PowerImage src={LogOutPowerButton}/></LogOutButton>
            </LogOutWrapper>
        </HeaderWrapper>
    );
}

export default Header;