import { motion } from "framer-motion"

export function SubTitle({children}){
return(
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.4 }}
        >
            <h2 className="text-blue-700 font-semibold text-lg m-2">{children}</h2>
        </motion.div>
)
}