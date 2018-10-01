import like from "./assets/img/like.svg";
import unlike from "./assets/img/unlike.svg";
import styled from "styled-components";

// Buttons
const Heart = styled.button`
    height: 20px;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${like});

    &.unlike{
        background-image: url(${unlike});
    }
`;

export { Heart };