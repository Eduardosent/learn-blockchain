import { motion } from "framer-motion"

export function TitleDescription({children}){
    return(
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.4 }}>
        <p className="font-medium px-4 text-lg pb-6">{children}</p>
        </motion.div>
    )
}