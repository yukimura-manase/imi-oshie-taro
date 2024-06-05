import React from 'react'
import Image from 'next/image'

import styles from './style.module.css'

const Taro = () => {
    return (
        <div className={styles.imageBox}>
            <Image src="/images/taro.png" className={styles.image} alt="illustration" width={300} height={300} />
        </div>
    )
}

export default Taro
