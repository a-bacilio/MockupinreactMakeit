import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Cookies from 'js-cookie';


import { LogoImage } from "./LogoImage";
import { MenuBar, Wrapper, Hamburguer, ModalMenuBar } from "./MicroComponents/Navbar.styles";
import Container from "./Container";
import Modal from "./MicroComponents/Modal";
import { Card } from "./MicroComponents/Card"

import HamburguerLogo from "../svg/hamburguer.svg";
import FinalLogo from "../svg/general/Logo.svg";
import Button from "./MicroComponents/Button";

import { navbarData } from "../Data/NavbarData";
import { Link } from "react-router-dom";



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

    const [modalnavbar, setmodalnavbar] = useState(false)

    return (

        <Container backgroundColor={"var(--color2)"}>
            <Wrapper>
                <Link to={"/"}><LogoImage src={FinalLogo} alt={FinalLogo} /></Link>
                <MenuBar>
                    {
                        switchNavbarContent(role)["navs"].map((item, key) => {
                            return (
                                <Button
                                    widthLevel={3}
                                    textColor={"white"}
                                    border={false}
                                    backgroundColor={"var(--color1)"}
                                    shadow={true}
                                    href={item.route}
                                >
                                    {item.name}
                                </Button>
                            )
                        })
                    }
                    <Button
                        widthLevel={2}
                        textColor={"black"}
                        border={false}
                        backgroundColor={"white"}
                        shadow={true}
                        href={"/login"}
                    >
                        Ingresar
                    </Button>
                </MenuBar>
                <Hamburguer onClick={() => setmodalnavbar(true)} src={HamburguerLogo} alt={HamburguerLogo} />
            </Wrapper>
            <Modal modalOn={modalnavbar} >

                <Card
                    backgroundColor={"white"}
                >
                    <ModalMenuBar>
                        {
                            switchNavbarContent(role)["navs"].map((item, key) => {
                                return (
                                    <Button
                                        widthLevel={3}
                                        textColor={"white"}
                                        border={false}
                                        backgroundColor={"var(--color1)"}
                                        shadow={true}
                                        href={item.route}
                                    >
                                        {item.name}
                                    </Button>
                                )
                            })
                        }
                        <Button
                            widthLevel={2}
                            textColor={"black"}
                            border={false}
                            backgroundColor={"white"}
                            shadow={true}
                            href={"/login"}
                        >
                            Ingresar
                        </Button>

                        <Button
                            onClick={() => setmodalnavbar(false)} 
                            widthLevel={2}
                            textColor={"black"}
                            border={false}
                            backgroundColor={"var(--color4)"}
                            shadow={true}
                        >
                            Cerrar
                        </Button>
                    </ModalMenuBar>
                </Card>
            </Modal>
        </Container>

    )

}



export default NavBar;