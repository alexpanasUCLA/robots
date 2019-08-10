import React from 'react';
import { motion } from "framer-motion";
import './card.style.css'

export default function CardComponent({monster}) {
    return (
        <motion.div whileHover = {{
                            scale: [1, 1.05,1],
                            rotate: [0, 10,0],
                         }}
            className="card-container">
            <img alt='cat' src={`https://robohash.org/${monster.id}?set=set3&size=180x180`}/>
            {monster.name}
        </motion.div>
    )
}
