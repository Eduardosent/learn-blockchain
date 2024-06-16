import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages";
import { pages } from "../data/pages";

export default function DynamicRouter(){
    return(
        <BrowserRouter>
        <Routes>
        <Route default Component={Home} />
            <Route path='/' Component={Home} />
            {
                pages.map((page,i)=>(
                    <Route key={i} path={page.route} Component={page.component}/>
                ))
            }
        </Routes>
        </BrowserRouter>
    )
}
//<Route path="*" element={<Navigate to="/" replace />} />