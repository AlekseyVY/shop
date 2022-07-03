import {ContainerStyle} from "./catalog.styles";
import {Card} from "../card/Card";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useAppSelector} from "../../hooks/hooks";


export const Catalog = () => {

    const cardData = useAppSelector(({card}) => card)

    useEffect(() => {

    });

    return (
        <ContainerStyle>
            {
                cardData.map((card, index) => {
                    return <Card key={card.id} {...card}/>
                })
            }
        </ContainerStyle>
    );
}
