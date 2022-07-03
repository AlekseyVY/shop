import {ContainerStyle} from "./card.style";
import {ICard} from "../../types/card.types";


export const Card = ({ id, image, cost, name, description }: ICard) => {
    return (
        <ContainerStyle image={image}>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{cost}</p>
        </ContainerStyle>
    );
}
