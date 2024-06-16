import { SubTitle, Title, TitleDescription } from "../../components";
import { PageList } from "../../components/PageList";
import Layout from "../../layout/Layout";

export default function Home(){
    return(
        <Layout>
            <Title>Bienvenido a LearnEdu, aprende Blockchain (Solidity y librerías de BTC Y ETH)</Title>
            <TitleDescription>LearnEdu es un proyecto donde podrás aprender y perfeccionar Tecnologías, las páginas se actualizarán constantemente para que puedas mejorar tu aprendizaje constantemente.</TitleDescription>
            <SubTitle>Lista de secciones para aprender Programación Blockchain</SubTitle>
            <PageList/>
        </Layout>
    )
}