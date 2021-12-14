import styled from "styled-components";
import React from 'react';
import Cookies from "js-cookie";
import Button from "./MicroComponents/Button";
import { useState } from "react";

export const Wrapper = styled.div`
width:100%;
height:20px;
background-color:yellow;
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
`


const VerComo = () => {
    return(
        <Wrapper>
            Ver como : 
            <Button
            border={true}
            borderColor={"black"}
            widthLevel={3}
            onClick={()=>{
                Cookies.set('userRole','guest');
                window.location.reload(true);
            }
            }
            >
                Guest
            </Button>
            <Button
            border={true}
            borderColor={"black"}
            widthLevel={3}
            onClick={()=>{
                Cookies.set('userRole','user');
                window.location.reload(true);
            }
            }
            >
                Usuario
            </Button>
            <Button
            border={true}
            borderColor={"black"}
            widthLevel={3}
            onClick={()=>{
                Cookies.set('userRole','moderator');
                window.location.reload(true);
            }
            }
            >
                Farmaceutico
            </Button>
            <Button
            border={true}
            borderColor={"black"}
            widthLevel={3}
            onClick={()=>{
                Cookies.set('userRole','admin');
                window.location.reload(true);
            }
            }
            >
                Admin
            </Button>
        </Wrapper>
    )
}


export default VerComo;
