import {motion} from 'framer-motion'
import { Link} from 'react-router-dom'

export function Header(){
    return(
        <header>
          <div  className="relative">
            <nav className="flex flex-row justify-between items-center absolute z-20 w-full">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: 'spring', delay: 0.4 }}
              >
                <Link className=" m-2 text-blue-500 text-2xl font-bold" to={'/'}>Learn
                    <span className="text-violet-500">Edu</span>
                </Link>
              </motion.div>
              <div className='flex flex-row'>
                <motion.div                
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: 'spring', delay: 0.4 }}
                >
                    <a className='m2 px-3 py-1 text-white text-md font-semibold' href="">Lista</a>
                </motion.div>
                <motion.div                
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: 'spring', delay: 0.4 }}
                >
                  <Link to={'/'} className='m2 px-3 py-1 text-white text-md font-semibold'>Creador</Link>
                </motion.div>
              </div>
            </nav>
            <img className="w-full h-[300px] md:h-[400px] " src={'./images/solbanner.jpg'} alt="React background" />
          </div>
        </header>
    )
}