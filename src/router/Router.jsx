import { BrowserRouter ,Routes, Route, Navigate} from 'react-router-dom'
import { Home, RouterPage, EnvPage, Internalization, Create, Components, Private, Zustand, ZustandPersist, Context, Websockets, Libreries, Payments, Notification, Fetch} from '../pages'

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path='/' Component={Home} />
            <Route path='/components' Component={Components}/>
            <Route path='/create' Component={Create} />
            <Route path='/routes' Component={RouterPage} />
            <Route path='/env' Component={EnvPage}/>
            <Route path='/internalization' Component={Internalization}/>
            <Route path='/private' Component={Private}/>
            <Route path='/context' Component={Context}/>
            <Route path='/zustand' Component={Zustand}/>
            <Route path='/zustandPersist' Component={ZustandPersist}/>
            <Route path='/websockets' Component={Websockets}/>
            <Route path='/libraries' Component={Libreries}/>
            <Route path='/payments' Component={Payments}/>
            <Route path='/push-notification' Component={Notification}/>
            <Route path='/fetch' Component={Fetch}/>
        </Routes>
        </BrowserRouter>
    )
}