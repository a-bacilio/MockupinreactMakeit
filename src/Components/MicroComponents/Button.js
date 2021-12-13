import styled from "styled-components";


export const ButtonBody = styled.div`
padding: 8px;
margin: 2px;
background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
color: ${props => props.textColor ? props.textColor : ""};
font-size: var(--smallFont);
border-radius: ${props => props.border ? "5px" : ""};
border: ${props => props.border ? "solid 1px black" : ""};
box-shadow: ${props => props.shadow ? "0px 4px 6px -1px rgba(0,0,0,0.1) , 0px 2px 4px -1px rgba(0,0,0,0.06)" : ""};
width: ${props => {
    switch (props.widthLevel) {
        case 1:
            return "25px";
        case 2:
            return "55px";
        case 3:
            return "85px";
        case 4:
            return "115px";
        case 5:
            return "145px";
        default:
            return "auto";
    }
}};
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
`

const Button = ({ children = <></>, href = "", backgroundColor = "", textColor = "", border = false, shadow = false, target = "", widthLevel=1 }) => {
    let ButtonResult = href
        ? (
            <a href={href} rel={"nofollow noopener noreferrer"} target={target}>
                <ButtonBody backgroundColor={backgroundColor} textColor={textColor} border={border} shadow={shadow} widthLevel={widthLevel}>
                    {children}
                </ButtonBody>
            </a>
        )
        : (
            <ButtonBody backgroundColor={backgroundColor} textColor={textColor} border={border} shadow={shadow} widthLevel={widthLevel}>
                {children}
            </ButtonBody>
        )
    return ButtonResult;
}

export default Button;