import React from 'react';
import styled from 'styled-components';
import MenuPrincipal from '../MenuPrincipal';
import {ContenedorPagina} from '../ContenedorPagina';
import breakpoint from '../../functions/Breakpoints';

const ModuloPanelControl=()=>{
    return(
        <>
            <MenuPrincipal/>
            <ContenedorPagina>              
                    <Card>
                        <CardHeader>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <h5>Aprendices registrados</h5>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            </svg>
                            <h5>Profesores registrados</h5>
                        </CardHeader2>
                    </Card>
                    <Card>
                        <CardHeader3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-flag" viewBox="0 0 16 16">
                                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
                            </svg>
                            <h5>Reportes de usuarios</h5>
                        </CardHeader3>
                    </Card>
                    <Card>
                        <CardHeader4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-dribbble" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"/>
                            </svg>
                            <h5>Lugar Ludicas registrado</h5>
                        </CardHeader4>

                    </Card>             
            </ContenedorPagina>
        </>     
    );
}
export default ModuloPanelControl;
const Card=styled.div`
    width:20%;
    min-width:100px;
    height:300px;
    background:rgba(255,255,255,0.8);
    border-radius:10px;
    margin:25px;  
    box-shadow:10px 10px 10px rgba(0,0,0,0.5);
    overflow:hidden;
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{
        width:85%; 
        height:250px;
        margin:10px auto;
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        width:40%;
        height:200px;
        margin:20px auto;
    }
    @media only screen and ${breakpoint.device.lg} ${breakpoint.device.Mlg}{
        width:30%;
    }
`;
const CardHeader=styled.div`
    width:100%;
    padding:25px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(225,120,27,1);
    h5{
        margin-left:10px;
        font-weight:bold;
    } 
    @media only screen and ${breakpoint.device.xs} ${breakpoint.device.Mxs}{ 
        h5{
            font-size:15px;
        }
    }
    @media only screen and ${breakpoint.device.sm} ${breakpoint.device.Msm}{
        h5{
            font-size:15px;
        }
    }
`;
const CardHeader2=styled(CardHeader)`
    background:#333;
`;
const CardHeader3=styled(CardHeader)`
    background:#CF2D16;
`;
const CardHeader4=styled(CardHeader)`
    background:#47B414;
`;