import React from "react";
import styled from "styled-components";

const ModalBody = styled.div`
position: fixed;
display: flex;
top: 0;
left: 0;
padding: 0;
margin: 0;
width: 100vw;
height: 100vh;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--colorShade);
`

const Modal = ({ children = <></>, modalOn = false }) => {
    if (modalOn) {
        return (
            <ModalBody>
                {children}
            </ModalBody>
        )
    }
    else {
        return null;
    }

}

export default Modal;
