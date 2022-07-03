import styled from "styled-components";

interface IContainer {
    image: string;
}

export const ContainerStyle = styled.li<IContainer>`
  background: url(${props => props.image}) no-repeat center;
    width: 200px;
    height: 300px;
`
