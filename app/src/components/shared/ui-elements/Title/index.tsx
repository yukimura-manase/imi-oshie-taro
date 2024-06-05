import React from 'react'
import styles from './style.module.css'

import { Mochiy_Pop_One } from "next/font/google";

const Font = Mochiy_Pop_One({ subsets: ["latin"], weight: ["400", "400"] });


const Title = () => {
    return (
        <div className={styles.textBox}>
            <h1 className={Font.className + ' ' + styles.title} >意味教え太郎</h1>
            <h2 className={Font.className + ' ' + styles.subTitle}>意味教えアシスタント</h2>
        </div>
    )
}

export default Title
