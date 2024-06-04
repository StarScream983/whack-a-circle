import styled from "styled-components";

const StyledShape = styled.div<{
    display: string;
    top: string;
    left: string;
    width: string;
    height: string;
}>`
    position: absolute;
    background-color: red;
    display: ${(props) => props.display};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

export default StyledShape;