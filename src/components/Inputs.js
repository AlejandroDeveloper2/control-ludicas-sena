import styled from 'styled-components';
//variable global para el color del input al hacer focus 
var color='#45CC1A';
export const Input=styled.input`
    width:100%;
    height:30px;
    border:none;
    border-bottom:1px solid #333;
    background:none;
    outline: none;
    position:relative;
    font-weight:bold;
    margin: 25px 25px 0px 0px;
    &:focus{
        border-bottom:2px solid ${color};
    }
`;
export const Select=styled.select`
    width:100%;
    height:30px;
    border:none;
    border-bottom:1px solid #333;
    background:none;
    outline: none;
    position:relative;
    font-weight:bold;
    margin: 25px 25px 0px 0px;
    &:focus{
        border-bottom:2px solid #45CC1A;
    }
`;