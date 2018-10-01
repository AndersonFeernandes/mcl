// Dependencies
import styled from "styled-components";

// Container
const Arrows = styled.div`
    min-height: 1em;
    padding-bottom: 26px;
`;

const Page = styled.div`
    margin-left: auto;
    margin-right: auto;
`;
Page.displayName = "Page";


const PageController = styled.footer`
    text-align: center;
    width: 40px;
    margin: auto;
    font-size: 1.5em;
    color: #7ddb39;
    font-weight: bold;
    font-family: Arial;
    cursor: pointer;
`;

const SliderContent = styled.section`
    background-color: #F6F6F6
    display: flex;
    flex-direction: column;
`;
SliderContent.displayName = "SliderContent";

// Icons
const LeftArrow = styled.span`
    &:before{
        content: "<";
        float: left;
    }
    &:hover{
        color: #5b9b2c;
    }
`;

const RightArrow = styled.span`
    &:after{
        content:">";
        float:right;
    }
    &:hover{
        color: #5b9b2c;
    }
`;

export {
    Arrows,
    LeftArrow,
    Page,
    PageController,
    RightArrow,
    SliderContent
};