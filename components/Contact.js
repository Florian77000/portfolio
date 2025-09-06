import styles from '../styles/Contact.module.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [select, setSelect] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        // preventDefault dit au navigateur : " ne fais pas ton comportement par défaut (reload), laisse-moi gérer l’action moi-même en JavaScript".
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            { name, email, select },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            alert("message envoyé");
            console.log('click')
            setName('');
            setEmail('');
            setSelect('');
        }) 
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
                        <option value='project application'>Projet application</option>
                    </select>
                </div>
                <div className={styles.formBtn}>
                    <button onClick={(e) =>handleClick(e)} className={styles.btn}>Envoyer</button>
                </div>
            </div>
        </div>
    )
}