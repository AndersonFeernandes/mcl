// Dependencies
import styled from "styled-components";

// Container
const CardContent = styled.section`
    width: 308px;
    line-height: 19px;
    border: solid 0.1em #75747433;
    margin: 26px  0 26px 26px;
    background-color: #FFF;
    padding: 19px;
    padding-top: 0;
    cursor: pointer;
    display:inline-grid;
    min-height: 24em;
    &:last-child{
        margin-right: 26px;
    }

    @media(max-width: 1224px){
        width: 86%;
        margin: 26px  0;

        &:last-child{
            margin-right: 0;
        }
    }
`;

const Header = styled.header`
    width: 100%;
`;

// Typography
const SubTitle = styled.h2`
    font-size: 12px;
    color: #ADADAD;
    font-family: Arial;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 0;
`;

const Title = styled.h1`
    font-size: 23px;
    color: #3A3A3A;
    font-family: Arial;
    font-weight: bold;
    margin-bottom: 0.3em;
`;

const Text = styled.p`
    font-size: 12px;
    color: #3A3A3A;
    font-family: Arial;
    line-height: 1.583;
`;

// Image
const Badge = styled.img`
float: left;
height: 60px;
margin: 0.5em;
margin-left:0;
`;

const HeaderImage = styled.img`
    width: 112.5%;
    margin-left: -19px
    height:173.25px;
    animation: pulse 1500ms infinite;

    @media(max-width: 1224px){
        width: 111.5%;
    }

    @keyframes pulse {
        0% {
          background-color: #f2f2f2;
        }
        50% {
          background-color: #FFF;
        }
        100% {
            background-color: #f2f2f2;
          }
      }
`;

export {
    Badge,
    CardContent,
    Header,
    HeaderImage,
    SubTitle,
    Text,
    Title
};