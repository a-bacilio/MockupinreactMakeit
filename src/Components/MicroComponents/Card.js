import styled from "styled-components";

export const Card = styled.div`
background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
padding: 15px;
border-radius: 5px;
box-shadow: ${props => {
        switch (props.level) {
            case 1:
                return "0px 1px 3px 0px rgba(0,0,0,0.1) , 0px 1px 2px 0px rgba(0,0,0,0.06)";
            case 2:
                return "0px 4px 6px -1px rgba(0,0,0,0.1) , 0px 2px 4px -1px rgba(0,0,0,0.06)";
            case 3:
                return "0px 2px 2px 0px rgba(0,0,0,0.14) , 0px 3px 1px -2px rgba(0,0,0,0.12) , 0px 1px 5px 0px rgba(0,0,0,0.2)";
            case 4:
                return "0px 2px 5px 0px rgba(0,0,0,0.14) , 0px 1px 10px 0px rgba(0,0,0,0.12) , 0px 2px 4px -1px rgba(0,0,0,0.2)";
            case 5:
                return "0px 8px 17px 2px rgba(0,0,0,0.14) , 0px 3px 14px 2px rgba(0,0,0,0.12) , 0px 5px 5px -3px rgba(0,0,0,0.2)";
            case 6:
                return "0px 16px 24px 2px rgba(0,0,0,0.14) , 0px 6px 30px 5px rgba(0,0,0,0.12) , 0px 8px 10px -7px rgba(0,0,0,0.2)";
            default:
                return "0px 1px 3px 0px rgba(0,0,0,0.1) , 0px 1px 2px 0px rgba(0,0,0,0.06)";
        }
    }};
@media only screen and (min-width:360px){
    width: ${props => {
        switch (props.widthLevel) {
            case 1:
                return "300px";
            case 2:
                return "400px";
            case 3:
                return "500px";
            case 4:
                return "600px";
            case 5:
                return "700px";
            default:
                return "300px";
        }
    }};
}
width: 300px;
min-width: 300px;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
`