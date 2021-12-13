import styled from "styled-components";
import Cookies from 'js-cookie';


import { LogoImage } from "./LogoImage";
import { MenuBar, Wrapper, Hamburguer } from "./MicroComponents/Navbar.styles";
import Container from "./Container";

import HamburguerLogo from "./svg/hamburguer.svg";
import FinalLogo from "./svg/general/Logo.svg";
import Button from "./MicroComponents/Button";

import { navbarData } from "../Data/NavbarData";


const switchNavbarContent = (role) => {
    switch (role) {
        case "guest":
            return navbarData[0];
            break;
        case "user":
            return navbarData[1];
            break;
        case "moderator":
            return navbarData[2];
            break;
        case "admin":
            return navbarData[3];
            break;
            dafault:
            return navbarData[0];
            break;
    }
}


const NavBar = () => {
    let role = Cookies.get('userRole');
    if (role === undefined) {
        Cookies.set('userRole', 'guest');
        role = "guest"
    }
    role="guest";

    return (
        
            <Container backgroundColor={"var(--color1)"}>
                <Wrapper>
                <LogoImage src={FinalLogo} alt={FinalLogo} />
                <MenuBar>
                    {
                        switchNavbarContent(role)["navs"].map((item, key) => {
                            return (
                                <Button
                                    widthLevel={4}
                                    textColor={"white"}
                                    border={false}
                                    backgroundColor={""}
                                    shadow={true}
                                    href={item.route}
                                >
                                    {item.name}
                                </Button>
                            )
                        })
                    }
                    <Button
                        widthLevel={3}
                        textColor={"black"}
                        border={false}
                        backgroundColor={"white"}
                        shadow={true}
                        href={"/login"}
                    >
                        Ingresar
                    </Button>
                </MenuBar>
                <Hamburguer src={HamburguerLogo} alt={HamburguerLogo} />
                </Wrapper>
            </Container>

    )

}



export default NavBar;