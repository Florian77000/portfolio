import styles from '../styles/Contact.module.css';
import { useState } from 'react';

export default function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [select, setSelect] = useState('');

    const handleClick = () => {
        setName('');
        setEmail('');
        setSelect('');
        console.log(name, email, select)
    }

    return (
        <div id="contact" className={styles.mainContact}>
            <h1 className={styles.h1}>Contact</h1>
            <div className={styles.containerContact}>
                <div className={styles.form}>
                    <input className={styles.input} placeholder='nom' onChange={(e) => setName(e.target.value)} value={name}></input>
                    <input className={styles.input} placeholder='email' onChange={(e)=> setEmail(e.target.value)} value={email}></input>
                    <select className={styles.input} onChange={(e) => setSelect(e.target.value)} value={select}>
                        <option></option>
                        <option value='mise en relation'>Mise en relation</option>
                        <option value='project application'>Porjet application</option>
                    </select>
                </div>
                <div className={styles.formBtn}>
                    <button onClick={() =>handleClick()} className={styles.btn}>Envoyer</button>
                </div>
            </div>
        </div>
    )
}