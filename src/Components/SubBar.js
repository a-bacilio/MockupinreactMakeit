import React from 'react';

import { Wrapper, GoBackImg } from './MicroComponents/SubBar.styles';
import goBackImg from '../svg/general/Arrow.svg';
import Container from './Container';



const SubBar = ({ children = <></> }) => {
    return (
        <Container backgroundColor={"var(--color1)"}>
            <Wrapper>
            <GoBackImg onClick={()=>{window.history.back();}} src={goBackImg} alt={goBackImg} />
            {children}
        </Wrapper>
        </Container>
        
    )
}

export default SubBar;