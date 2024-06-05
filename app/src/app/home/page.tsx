import styles from './style.module.css'
import Title from '@/components/shared/ui-elements/Title';
import Taro from '@/components/shared/ui-elements/Taro';
import VoiceInput from '@/components/shared/ui-parts/VoiceInput';
import { useState } from 'react';

const Home = (): JSX.Element => {
    return (
        <>
            <main className={styles.box}>
                <Title  />
                <Taro />
                <VoiceInput />
            </main>
        </>

    )
}

export default Home
