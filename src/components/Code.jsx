import { motion } from "framer-motion";
import React from "react";
import { FaCopy} from 'react-icons/fa6'

export function Code({code}){

    function copy(){
        navigator.clipboard.writeText(code)
        alert('codigo copiado con exito')
    }

    return(
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.4 }}
        >
        <pre className='bg-blue-950 rounded-md m-4 p-2 relative'>
            <button onClick={copy} className="absolute top-2 right-2"><FaCopy size={20} color="white"></FaCopy></button>
            <code className="text-white text-[0.62rem] sm:text-[0.75rem] md:text-sm">{code}
            </code>
        </pre>
        </motion.div>
    )
}
