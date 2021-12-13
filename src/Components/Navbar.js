import styled from "styled-components";
import { LogoImage } from "./LogoImage";
import { MenuBar, Wrapper, Hamburguer } from "./MicroComponents/Navbar.styles";



import HamburguerLogo from "./svg/hamburguer.svg";
import FinalLogo from "./svg/general/Logo.svg";
import Button from "./MicroComponents/Button";


const NavBar  = () => {
    return (
        <Wrapper>
            <LogoImage src={FinalLogo} alt={FinalLogo}/>
            <MenuBar>
                <Button>Hola</Button>
            </MenuBar>
            <Hamburguer src={HamburguerLogo} alt={HamburguerLogo}/>
        </Wrapper>
    )

}

export default NavBar;