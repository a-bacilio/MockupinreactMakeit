import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction: row;
justify-content: center;
align-items: stretch;
background-color:${props=>props.backgroundColor?props.backgroundColor:""};
`;


export const Workzone = styled.div`
width: 95%;
height: 100%;
max-width: 1500px;
min-width: 350px;
display: flex;
flex-direction:row;
justify-content: center;
align-items: stretch;
background-color:${props=>props.backgroundColor?props.backgroundColor:""};
`