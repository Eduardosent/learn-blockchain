import { Link } from "react-router-dom"
import { pages } from "../data/pages"

export function PageList(){
    return(
        <div className="flex flex-col items-start">
            {
                pages.map((page,i)=>(
                    <Link className={`${page.level ==1 ? 'bg-green-700' : page.level==2 ? 'bg-amber-700': page.level==3 ?'bg-red-700': 'bg-blue-700'} m-1 py-1 px-3 text-white rounded-lg font-medium`} key={i} to={page.route}>{i+1}.{page.name}</Link>
                ))
            }
        </div>
    )
}