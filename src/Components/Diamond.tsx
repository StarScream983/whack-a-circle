import styled from "styled-components";
import StyledShape from "./StyledShape";

const Diamond = styled(StyledShape)<{
    display: string;
    top: string;
    left: string;
    width: string;
    height: string;
}>`
    transform: rotate(45deg);
`;

export default Diamond;