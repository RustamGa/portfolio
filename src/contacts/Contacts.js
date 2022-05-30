import React from 'react'
import s from './Contacts.module.css'
import style from '../common/styles/Container.module.css'


function Contacts() {
    return <div className={s.contactsBlock}>
        <div className={`${style.container} ${s.contactsContainer}`}>
            <h2 className={s.title}>
                Contacts
            </h2>
            <form className={s.contactsForm}>
                <input className={s.formInput}/>
                <input className={s.formInput}/>
                <textarea className={s.formTextarea}/>
            </form>
            <button className={s.contactsButton}>SEND MESSAGE </button>
            {/*<div className={s.contacts}>*/}
            {/*</div>*/}
        </div>
    </div>
}

export default Contacts;