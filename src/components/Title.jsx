import {motion} from 'framer-motion'

/*export function Title({children}){
    return(
        <motion.div className="flex justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.4 }}
        >
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold text-3xl text-center py-2">{children}</h1>
        </motion.div>
    )
}*/
export function Title({children}){
    return(
        <div className='flex justify-center'>
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text font-semibold text-3xl py-2 px-2 text-center">{children}</h1>
        </div>
    )
}
/*<motion.div
initial={{ opacity: 0, y: -100 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, type: 'spring', delay: 0.4 }}
className="mx-auto space-y-1 whitespace-pre-wrap text-center text-4xl font-bold text-white md:text-start md:text-5xl lg:text-6xl"
></motion.div>*/