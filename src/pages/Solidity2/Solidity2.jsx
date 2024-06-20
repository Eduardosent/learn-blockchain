import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";
import { code } from "./const";

export default function Solidity2(){
    return(
        <Layout>
            <Title>Sintaxis de Solidity Part 2</Title>
            <TitleDescription>Sigue explorando la sintaxis del lenguaje de los smart contract de Ethereum para tener un mayor dominio</TitleDescription>
            <SubTitle>Llamar a contratos principales</SubTitle>
            <ExtraText>Los contratos principales se pueden llamar directamente o utilizando la palabra clave super.</ExtraText>
            <ExtraText>Al utilizar la palabra clave super, se llamarán todos los contratos principales inmediatos.</ExtraText>
            <Code code={code.callfathercontract}/>
        </Layout>
    )
}