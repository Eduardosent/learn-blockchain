import { Header } from "../components";
import NavBar from "../components/NavBar";

export default function Layout({children}){
    return(
        <>
        <Header/>
        <main className="">
            {children}
        </main>
        </>
    )
}