import {ContainerStyle} from "./main.styles";
import {Cta} from "../../components/cta/Cta";
import {Catalog} from "../../components/catalog/Catalog";


export const Main = () => {
    return (
        <ContainerStyle>
            <h1>Main</h1>
            <Cta />
            <Catalog />
        </ContainerStyle>
    );
}
