import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";
import { code } from "./const";

export default function Soliity3(){
    return(
        <Layout>
            <Title></Title>
            <TitleDescription></TitleDescription>
            <SubTitle>Matemáticas sin control</SubTitle>
            <ExtraText>El desbordamiento y subdesbordamiento de números en Solidity 0.8 genera un error. Esto se puede desactivar utilizando unchecked.</ExtraText>
            <ExtraText>Desactivar la verificación de desbordamiento/infradesbordamiento ahorra gas.</ExtraText>
            <Code code={code.mathnocontrol}/>
            <SubTitle>Variable de ensamblaje</SubTitle>
            <ExtraText>Ejemplo de cómo declarar variables dentro assembly</ExtraText>
            <Code code={code.asvar}/>
            <SubTitle>Declaraciones condicionales de ensamblaje</SubTitle>
            <ExtraText>Ejemplo de declaraciones condicionales en assembly</ExtraText>
            <Code code={code.ascond}/>
            <SubTitle>Assembly loop</SubTitle>
            <ExtraText>Ejemplo de loop en assembly</ExtraText>
            <Code code={code.asloop}/>
            <SubTitle>Assembly Error</SubTitle>
            <ExtraText>Ejemplo de error en assembly</ExtraText>
            <Code code={code.aserror}/>
            <SubTitle>Assembly Math</SubTitle>
            <ExtraText>Ejemplo de math en assembly</ExtraText>
            <Code code={code.asmath}/>
        </Layout>
    )
}