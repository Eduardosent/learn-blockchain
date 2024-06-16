export default function NavBar(){
    return(
        <nav className="flex flex-row justify-between items-center">
            <div>
                <a className="text-blue-500 text-2xl font-bold" href="">Learn
                    <span className="text-violet-500">Edu</span>
                </a>
            </div>
            <div>
                <a className='m2 px-3 py-1 text-cyan-500 text-lg font-bold ' href="">Lista</a>
                <a className='m-2  px-3 py-1  text-cyan-300 text-lg font-bold' href="">Creador</a>
            </div>
        </nav>
    )
}